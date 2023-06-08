#pragma strict

var hp : int = 10;
var attack : int = 10;

var healItemPrefab : GameObject;
var weaponItemPrefab : GameObject;
var damagedEffectPrefab : GameObject;
var deadEffectPrefab : GameObject;

private var originalColor : Color;
private var level : float;
private var effectFlag : boolean;

function Start () {
	originalColor = renderer.material.color;
}

function Update () {
	if(effectFlag)
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(40.0 * Time.time));

}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag == "Player"){
		other.gameObject.SendMessage("MonsterDamage",attack);
		other.gameObject.BroadcastMessage("damaged");
	}
}

function Hit(amount : int){
	hp -= amount;
	effectFlag = true;
	Instantiate(damagedEffectPrefab,transform.position,transform.rotation);
	yield WaitForSeconds(0.3);
	effectFlag = false;
	renderer.material.color = originalColor;
	if(hp <= 0.0){
		Instantiate(deadEffectPrefab,transform.position,transform.rotation);
		var rand : int = Random.Range(0,6);
		if(rand >= 4)
			Instantiate(healItemPrefab,transform.position,transform.rotation);
		else if(rand == 3)
			Instantiate(weaponItemPrefab,transform.position,transform.rotation);
		else;
		Destroy(gameObject);
	}
}