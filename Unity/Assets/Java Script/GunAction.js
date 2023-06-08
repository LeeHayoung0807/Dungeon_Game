#pragma strict

private var bullet : int = 0;

function Start () {
	animation["Take 001"].speed = 5.0;
}

function Update () {
	bullet = PlayerStatus.bullet;
	if(bullet > 0){
		if(Input.GetButtonDown("Fire1")){
			//animation["Take 001"].speed = 5.0;
			if(animation.isPlaying)
				animation.Stop("Take 001");
			animation.Play("Take 001");
			bullet -= 1;
		}
	}
}
