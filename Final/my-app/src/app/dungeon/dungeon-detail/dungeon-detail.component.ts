import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dungeon-detail',
  templateUrl: './dungeon-detail.component.html',
  styleUrls: ['./dungeon-detail.component.css']
})
export class DungeonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   updateCurrentPaths() {
      console.log("updateCurrentPaths");
      this.adventure.currentPaths = [];
      for (var i = 0; i <= this.adventure.paths.length - 1; i++) {
        if(this.adventure.paths[i].round === this.adventure.currentRound) {
          this.adventure.currentPaths.push(this.adventure.paths[i]);
        }
      };
    }
    http.get('adventure.json').success(function(data) {
      console.log("json get");
      this.adventure = {
        adventureName: data.adventureName,
        adventureDescription: data.adventureDescription,
        currentRound: 1,
        currentPaths: [],
        currentPath: 0,
        currentPathDescription: '',
        playerAlive: true,
        winnngRound: data.winnngRound,
        hasWon: false,
        paths: data.paths
      }
      updateCurrentPaths();
    });
    this.pathClick = function (id) {
      console.log("pathClick");
      for (var i = 0; i <= this.adventure.paths.length - 1; i++) {
        if (this.adventure.paths[i].id === id) {
          this.adventure.currentPath = id;
          this.adventure.currentPathDescription = this.adventure.paths[i].pathResult;
          if (this.adventure.paths[i].death) {
            this.adventure.playerAlive = false;
          } else if (this.adventure.currentPath === this.adventure.winnngRound) {
            this.adventure.hasWon = true;
          } else if (!this.adventure.paths[i].goToNextRound) {
            for (var j = 0; j <= this.adventure.currentPaths.length - 1; j++) {
              if(this.adventure.currentPaths[j].id == this.adventure.currentPath) {
                this.adventure.currentPaths.splice(j, 1);
              }
            };
          } else {
            this.adventure.currentRound = this.adventure.currentRound + 1;
            updateCurrentPaths();
          }
        }
      };
 
  });
}
