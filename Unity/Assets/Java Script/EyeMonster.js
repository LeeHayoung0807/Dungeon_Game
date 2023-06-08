#pragma strict

var eyeAttackPrefab : GameObject;

private var attackTime : float;
private var initalVelocity : float = 30;

var attackSE : AudioClip;

function Start () {
	attackTime = Random.Range(2.0,5.0);
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
		attackTime -= Time.deltaTime;
		if(attackTime <= 0.0){
			var attack : GameObject = Instantiate(eyeAttackPrefab, transform.position, transform.rotation);
			var dir : Vector3 = transform.forward;
			audio.PlayOneShot(attackSE);
			attack.rigidbody.velocity = dir * initalVelocity;
			attackTime = Random.Range(2.0,5.0);
		}
	}
	else;
}