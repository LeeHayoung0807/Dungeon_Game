#pragma strict

var bossDeadSE : AudioClip;

function Start () {

}

function Update () {

}

function Dead(){
	audio.PlayOneShot(bossDeadSE);
}