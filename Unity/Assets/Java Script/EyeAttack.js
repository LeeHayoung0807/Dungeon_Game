#pragma strict

var attack : int = 20;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		other.gameObject.SendMessage("MonsterDamage",attack);
		other.gameObject.BroadcastMessage("damaged");
		Destroy(gameObject);
	}
	Destroy(gameObject);
}