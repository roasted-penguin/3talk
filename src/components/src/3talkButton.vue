<template>
<button :class="classes" :disabled="disabled" type="button" @click="handleClick"><slot /></button>
</template>
<script>
export default {
	name: '3talkButton',

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


	computed : {

	},

	methods:{

	handleCLick(ev){
	this.$emit('click',ev)
	}
	}
}
</script>
<style>

.talk-button {
	padding : 0.6em 1.3em;
	background-color :#eee !important;
}

.talk-button-text{
	border: none;
	padding-right : 0;
	padding-left : 0;
}
</style>