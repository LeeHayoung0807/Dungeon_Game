#pragma strict

var style1 : GUIStyle;
var style2 : GUIStyle;

function Start () {
	
}

function Update () {

	if(Input.GetButtonDown("Jump"))
		Application.LoadLevel("stage1");

}

function OnGUI(){
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	
	GUI.Label(Rect(sw/100,sh/4,sw,sh/4),"D U N G E O N  E S C A P E",style1);
	GUI.Label(Rect(sw/100,sh/2,sw,sh/4),"Push The Spacebar to Start",style2);

}