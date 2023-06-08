#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision){
	if(collisionInfo.gameObject.tag == "Monster"){
		collisionInfo.gameObject.SendMessage("Hit",10);
		Destroy(gameObject);
	}
	
	Destroy(gameObject);
}