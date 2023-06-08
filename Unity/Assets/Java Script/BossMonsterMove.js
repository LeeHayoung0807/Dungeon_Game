#pragma strict

private var moveTime : float = 1;
//private var colTime : float = 13;
//private var col : Collider;
//private var exitTime : float = 0.8;

function Start () {

}

function Update () {
	var player : GameObject = GameObject.FindWithTag("Player");
	if(player != null)
		var dis : float = Vector3.Distance(player.transform.position,transform.position);
	else;
	
	//var col : CapsuleCollider = gameObject.GetComponent("CapsuleCollider") as CapsuleCollider;
	//var anm : Animation = gameObject.GetComponent("Animation") as Animation;
	
	if(player != null && dis < 20.0){
		var direction : Vector3 = (transform.position - player.transform.position).normalized;
		var rotation = Quaternion.LookRotation(direction);
		transform.rotation = rotation;
		if(moveTime <= 0.0){
			animation.Play("Take 001");
			moveTime = 1;
		}
		moveTime -= Time.deltaTime;
	}
	else;
	
	
}