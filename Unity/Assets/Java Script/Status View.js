#pragma strict

private var heal : boolean;
private var damage : boolean;
private var originalColor : Color;
private var level : float;

function Start () {
	originalColor = renderer.material.color;
}

function Update () {
	if(heal){
		level = Mathf.Abs(Mathf.Sin(Time.time * 5));
		renderer.material.color = Color.green * level;
	}
	else if(damage){
		level = Mathf.Abs(Mathf.Sin(Time.time * 5));
		renderer.material.color = Color.red * level;
	}
	else renderer.material.color = originalColor;
}

function healed(){
	heal = true;
	yield WaitForSeconds(0.3);
	heal = false;
}

function damaged(){
	damage = true;
	yield WaitForSeconds(0.3);
	damage = false;
}