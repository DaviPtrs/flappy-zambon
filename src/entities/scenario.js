import { board, boardContext } from "./../consts/board.js";
import {game, sprite} from "./../consts/general.js";

// BACKGROUND
const background = {
    sX : 0,
    sY : 0,
    w : 275,
    h : 226,
    x : 0,
    y : board.height - 226,
    
    draw : function(){
        boardContext.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        boardContext.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}

// FOREGROUND
const foreground = {
    sX: 276,
    sY: 0,
    w: 224,
    h: 112,
    x: 0,
    y: board.height - 112,
    
    dx : 2,
    
    draw : function(){
        boardContext.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        boardContext.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },
    
    update: function(){
        if(game.state.current == game.state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
}

export {background, foreground};