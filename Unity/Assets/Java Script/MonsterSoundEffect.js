#pragma strict

var monsterDamageSE : AudioClip;

function Start () {
	
}

function Update () {
	
}

function Hit(){
	audio.PlayOneShot(monsterDamageSE);
}
