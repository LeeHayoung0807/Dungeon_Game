#pragma strict

var style1 : GUIStyle;
var style2 : GUIStyle;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1"))
		Application.LoadLevel("main");
}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	GUI.Label(Rect(sw/100,sh/4,sw,sh/4),"C L E A R E D !",style1);
	GUI.Label(Rect(sw/100,sh/1.8,sw,sh/4),"Click to Title",style2);

}