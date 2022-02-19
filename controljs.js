player.setCamera( this );
function pointerhover( event ) {

	//var time = event.time * 0.001;

	//this.position.x = Math.sin( time ) * 4;
	//this.position.z = Math.cos( time ) * 4;
	//this.lookAt( scene.position );

	this.position.x = Math.sin( event.clientX/player.width ) * 2;
	this.position.z = Math.cos( event.clientX/player.width  ) * 2;
	

    
}