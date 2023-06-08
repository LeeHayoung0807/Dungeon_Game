#pragma strict

var doorSE : AudioClip;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		audio.PlayOneShot(doorSE);
		yield WaitForSeconds(0.8);
		Application.LoadLevel("stage2");
	}
}