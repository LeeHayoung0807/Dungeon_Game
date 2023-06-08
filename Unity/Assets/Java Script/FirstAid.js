#pragma strict

var itemEffectPrefab : GameObject;

function Start () {
	
	var healEffect : GameObject = Instantiate(itemEffectPrefab, transform.position, transform.rotation);
	healEffect.transform.parent = gameObject.transform;
}

function Update () {
	
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		other.gameObject.SendMessage("FirstAid",20);
		other.gameObject.BroadcastMessage("healed");
		Destroy(gameObject);
	}
}