#pragma strict

var gunPrefab : GameObject;
static private var gun : boolean = false;
static private var tried : boolean = false;

function Awake(){
	DontDestroyOnLoad(this);
}

function Start () {

}

function Update () {
	
}

function GetGun(){
	if(!gun){
		var handgun : GameObject = Instantiate(gunPrefab, transform.position, transform.rotation);
		handgun.transform.parent = gameObject.transform ;
		handgun.transform.localPosition = new Vector3(0.3,-0.8,1.2);
		handgun.gameObject.BroadcastMessage("GetBullet");
	}
}