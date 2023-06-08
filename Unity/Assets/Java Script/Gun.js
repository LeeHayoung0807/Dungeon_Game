#pragma strict

var bulletPrefab : GameObject;
var initalVelocity : float;

private var bullets : int = 0;

var style : GUIStyle;

function Start () {
	
}

function Update () {
	bullets = PlayerStatus.bullet;
	if(bullets > 0){
		if(Input.GetButtonDown("Fire1")){
			var bullet : GameObject = Instantiate(bulletPrefab, transform.position, transform.rotation);

			var direction : Vector3 = transform.forward;
			bullet.rigidbody.velocity = direction * initalVelocity;
			bullets -= 1;
		
		}
	}
	
	
}

function OnGUI(){
	
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	GUI.Label(Rect(sw/2,sh/2-15,5,5),".",style);
	
}