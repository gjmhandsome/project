//初始化相位，并创建一个400x490px游戏
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');
var game_state = {};	

// Creates a new 'main' state that will contain the game
// 创建一个 main_state 来装载游戏
var menu_state={  
	preload:function(){
		this.game.load.image('bird','img/bird.png')
		this.game.stage.backgroundColor = '#71c5cf';
	},
    create: function(){  
           
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);        //定义接受按键消息变量  
        space_key.onDown.add(this.start,this);        //按键按下时调用start()函数  
        
     
        var style1= {font: "50px Arial",fill: "#FFFFFF"};
        var style2={font: "10px Arial",fill: "#FFFFFF"}//定义游戏操作说明文字风格
        var x = game.world.width/2,y = game.world.height/2;        //定义坐标变量x,y，(x,y)为game.world中心  
           
//      this.bg = this.game.add.sprite(0,0,'bg');        //在game.world中坐标(0,0)处画出预加载游戏资源，背景图片  
//      this.bo = this.game.add.sprite(0,0,'bo');        //也是背景图片，我的背景由两个背景透明的图片组合而成，其实可以合二为一  
//      this.menu = this.game.add.sprite(0,0,'menu');        //加载menu图片  
        this.bird = this.game.add.sprite(x-30,y-60,'bird');        //载入即将闯荡管子世界的Bird  
        var text = this.game.add.text(x-80,y-150,"Fly bird!",style1);
        var text = this.game.add.text(x,y-68,"按空格开始!",style2);        //定义显示文本变量,并在game.world显示，参数(坐标,显示文本,文本风格)  
        text.anchor.setTo(0.5,0.5);        //  
             
    },  
    start:function(){  
        this.game.state.start('main');        //调用start()函数后进入'ready'state  
    }  
};  
game_state.main = function() { };  
game_state.main.prototype = {

    // Function called first to load all the img
    //函数称为第一次加载所有IMG
    preload: function() { 
        //改变游戏的背景颜色
        this.game.stage.backgroundColor = '#71c5cf';

        // Load the bird sprite
        // 加载鸟
        this.game.load.image('bird', 'img/bird.png');  

        // Load the pipe sprite
        //加载管道
        this.game.load.image('pipe', 'img/pipe.png');      
    },

    // Fuction called after 'preload' to setup the game 
    //在“预加载”后调用函数来设置游戏
    create: function() { 
        // Display the bird on the screen
        //在屏幕上显示这只鸟。
        this.bird = this.game.add.sprite(100, 245, 'bird');
        
        // Add gravity to the bird to make it fall
        //加重力使鸟下降
        this.bird.body.gravity.y = 1000	; 

        // Call the 'jump' function when the spacekey is hit
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.jump, this); 

        // Create a group of 20 pipes
        //创建一组20个管道
        this.pipes = game.add.group();
        this.pipes.createMultiple(20, 'pipe');  

        // Timer that calls 'add_row_of_pipes' ever 1.5 seconds
        this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);           

        // Add a score label on the top left of the screen
        this.score = 0;
        var style = { font: "30px Arial", fill: "#ffffff" };
        this.label_score = this.game.add.text(20, 20, "0", style);  
    },

//  // This function is called 60 times per second
//  update: function() {
//      // If the bird is out of the world (too high or too low), call the 'restart_game' function
//      if (this.bird.inWorld == false)
//          this.restart_game(); 
//
//      // If the bird overlap any pipes, call 'restart_game'
//      this.game.physics.overlap(this.bird, this.pipes, this.restart_game, null, this);      
//  },
//
//  // Make the bird jump 
//  jump: function() {
//      // Add a vertical velocity to the bird
//      this.bird.body.velocity.y = -350;
//  },
//
//  // Restart the game
//  restart_game: function() {
//      // Remove the timer
//      this.game.time.events.remove(this.timer);
//
//      // Start the 'main' state, which restarts the game
//      this.game.state.start('main');
//  },
//
//  // Add a pipe on the screen
//  add_one_pipe: function(x, y) {
//      // Get the first dead pipe of our group
//      var pipe = this.pipes.getFirstDead();
//
//      // Set the new position of the pipe
//      pipe.reset(x, y);
//
//       // Add velocity to the pipe to make it move left
//      pipe.body.velocity.x = -200; 
//             
//      // Kill the pipe when it's no longer visible 
//      pipe.outOfBoundsKill = true;
//  },
//
//  // Add a row of 6 pipes with a hole somewhere in the middle
//  add_row_of_pipes: function() {
//      var hole = Math.floor(Math.random()*5)+1;
//      
//      for (var i = 0; i < 8; i++)
//          if (i != hole && i != hole +1) 
//              this.add_one_pipe(400, i*60+10);   
//  
//      this.score += 1;
//      this.label_score.content = this.score;  
//  },
//};
update: function() {
	    // 如果 bird 跳得太高，或者掉了下去，游戏重新开始
	    if (this.bird.inWorld == false)
	        this.restart_game();


	    // 实现碰撞的效果
		this.game.physics.overlap(this.bird, this.pipes, this.hit_pipe, null, this);
		
		// bird 下降时，角度转动到特点值
		if (this.bird.angle < 20)  
		    this.bird.angle += 1;
    },


	// jump 函数用来展示 bird 跳跃动作
	jump: function() {  
		//判断 bird 状态
		if (this.bird.alive == false)  
		    return;


	    // 给 bird 增加一个垂直方向的速度，用来模拟跳跃动作
	    this.bird.body.velocity.y = -350;


	    // 给 bird 添加一个动画，将角度在100毫秒中调整到-20
	    this.game.add.tween(this.bird).to({angle: -20}, 100).start();


	    //调用音效
	    this.jump_sound.play();
	},
	 
	// 重新开始游戏
	restart_game: function() {  
	    this.game.state.start('main');
		this.game.time.events.remove(this.timer);
	},


	//添加一个 pipe
	add_one_pipe: function(x, y) {  
	    // 获得 pipes 组的第一个未激活的 pipe
	    var pipe = this.pipes.getFirstDead();
	 
	    // 给 pipe 设置坐标
	    pipe.reset(x, y);
	 
	    // 给 pipe 添加水平速度使它向左移动
	    pipe.body.velocity.x = -200; 
	 
	    // 当 pipe 不可见时，设置其已挂
	    pipe.outOfBoundsKill = true;
	},


	// 设置垂直方向上多个 pipes
	add_row_of_pipes: function() {
		// 设置 bird 逃生的缺口  
	    var hole = Math.floor(Math.random()*5)+1;
	 
	    for (var i = 0; i < 8; i++)
	        if (i != hole && i != hole +1) 
	            this.add_one_pipe(400, i*60+10);   
	    // 加分
	    this.score += 1;  
		this.label_score.content = this.score;
	},


	// hit_pipe 函数展示 bird 撞击 pipes 的动作
	hit_pipe: function() {  
	    // 如果 bird 已经挂了，就什么都不做
	    if (this.bird.alive == false)
	        this.game.state.start('menu');
	 
	    // 如果 bird 还活着，就设定 bird 已挂
	    this.bird.alive = false;
	 
	    // 阻止新的 pipe 出现
	    this.game.time.events.remove(this.timer);
	 
	    // 阻止所有 pipes 的移动
	    this.pipes.forEachAlive(function(p){
	        p.body.velocity.x = 0;
	    }, this);
	},
};


// Add and start the 'main' state to start the game
game.state.add('main', game_state.main);  
game.state.add('menu', menu_state);  
game.state.start('menu'); 