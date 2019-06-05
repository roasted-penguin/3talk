<template>
<button class="blueButton" :disabled="disabled" type="button" @click="handleClick"><slot /></button>
</template>
<script>
export default {
	name: 'blueButton',

	props :{

	type : {
	type: String,
	default : 'button'
	},

	disabled : {
	type : Boolean,
	default : false
	}
	},

	methods:{

	handleClick(ev){
	this.$emit('click',ev)
	}
	}
}
</script>
<style>

.blueButton {
	padding : 0.6em 1.3em;
	background-color :#017bff ;
	border-radius: 0.8em;
	border : none;
	color : #fff;
}


</style>