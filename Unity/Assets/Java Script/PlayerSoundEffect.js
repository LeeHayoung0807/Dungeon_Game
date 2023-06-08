#pragma strict

var weaponBoxSE : AudioClip;
var healSE : AudioClip;
var gunshotSE : AudioClip;
var nobulletSE : AudioClip;
var getDamageSE : AudioClip;

function Start () {

}

function Update () {
	if(Input.GetButtonDown("Fire1") && PlayerStatus.bullet > 0)
		audio.PlayOneShot(gunshotSE);
	if(Input.GetButtonDown("Fire1") && PlayerStatus.bullet <= 0)
		audio.PlayOneShot(nobulletSE);

}

function FirstAid(amount : int){
	audio.PlayOneShot(healSE);
}

function WeaponBox(){
	audio.PlayOneShot(weaponBoxSE);	
}

function MonsterDamage(amount : int){
	audio.PlayOneShot(getDamageSE);	
}