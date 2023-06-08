#pragma strict

var weaponEffectPrefab : GameObject;

function Start () {
	var weaponEffect : GameObject = Instantiate(weaponEffectPrefab, transform.position, transform.rotation);
	weaponEffect.transform.parent = gameObject.transform;
}

function Update () {

}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		other.gameObject.SendMessage("WeaponBox");
		//other.gameObject.BroadcastMessage("GetGun");
		//other.gameObject.BroadcastMessage("GetWeapon");
		Destroy(gameObject);
	}
}