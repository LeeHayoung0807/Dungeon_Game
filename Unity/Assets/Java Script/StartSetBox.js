#pragma strict

//static private life

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Jump")){
		//gameObject.SendMessage("SetStart");
		PlayerStatus.life = 100;
		PlayerStatus.bullet = 0;
		
	}
}
