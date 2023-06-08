#pragma strict

var monsterSpeed : float = 3.0;

function Start () {
	
}

function Update () {

	var player : GameObject = GameObject.FindWithTag("Player");
	if(player != null)
		var dis : float = Vector3.Distance(player.transform.position,transform.position);
	else;
	
	if(player != null && dis < 20.0){
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		/*var look : Vector3 = player.transform.position - transform.position;
		look.x = 0;
		look.z = 0;
		transform.LookAt(look);*/
		var rotation = Quaternion.LookRotation(direction);
		transform.rotation = rotation;
		transform.Translate(direction * monsterSpeed * Time.deltaTime);
	}
	else;
	
	//animation.Play("slimJump");
		
}
