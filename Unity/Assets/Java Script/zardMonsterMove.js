#pragma strict

var monsterSpeed : float = 3.0;
private var rest : float = 1.0;

function Start () {

}

function Update () {
	var player : GameObject = GameObject.FindWithTag("Player");
	if(player != null)
		var dis : float = Vector3.Distance(player.transform.position,transform.position);
	else;
	
	if(player != null && dis < 20.0){
		var direction : Vector3 = (player.transform.position - transform.position).normalized;
		var rotation = Quaternion.LookRotation(direction);
		transform.rotation = rotation;
		animation.Play("Take 001");
		transform.Translate(direction * monsterSpeed * Time.deltaTime);
			
	}
	else;
}