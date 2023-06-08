#pragma strict

static var life : int = 100;
static var bullet : int = 0;

var skin : GUISkin;

private var lifeStyle : GUIStyle;
private var bulletStyle : GUIStyle;
private var originalColor : Color;

function Start () {
	lifeStyle = skin.GetStyle("Life");
	bulletStyle = skin.GetStyle("Bullet");
	originalColor = lifeStyle.normal.textColor;
	
}

function Update () {
	if(Input.GetButtonDown("Fire1") && bullet > 0){
		bullet -= 1;	
	}
	else;
	
	if(life <= 30 && life > 10)
		lifeStyle.normal.textColor = Color.yellow;
	else if(life <= 10)
		lifeStyle.normal.textColor = Color.red;
	else
		lifeStyle.normal.textColor = originalColor;
		
	if(bullet <= 10 && bullet > 5)
		bulletStyle.normal.textColor = Color.yellow;
	else if(bullet <= 5)
		bulletStyle.normal.textColor = Color.red;
	else
		bulletStyle.normal.textColor = originalColor;
}

function MonsterDamage(amount : int){
	life -= amount;
	if(life <= 0){
		Destroy(gameObject);
		Application.LoadLevel("Dead");
	}
}

function FirstAid(amount : int){
	life += amount;
	if(life > 100){
		life = 100;
	}
}

function WeaponBox(){
	
	bullet += 10;
	
}

function OnGUI(){
	GUI.skin = skin;
	var rect : Rect = Rect(10,5,Screen.width/2,Screen.height/2);
	var rect2 : Rect = Rect(Screen.width/2-15,5,Screen.width/2,Screen.height/2);
	GUI.Label(rect, "LIFE : "+life.ToString(),"Life");
	GUI.Label(rect2,"BULLET : "+bullet.ToString(),"Bullet");
	
}