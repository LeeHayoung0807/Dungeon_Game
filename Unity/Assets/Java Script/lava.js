#pragma strict

function Start () {
	audio.Play();
}

function Update () {

}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Player"){
		Destroy(other.gameObject);
		Application.LoadLevel("Dead");
	}
	Destroy(other.gameObject);
}