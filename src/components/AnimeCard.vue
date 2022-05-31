<template>
	<div class="card">
	<router-link :to="{ name: 'AnimeDetail', params: { id: anime.mal_id, title: anime.title}}">
		<a class="cardAnime" target="_blank">
			<img 
				:src="anime.images.jpg.image_url" 
				:alt="anime.title + ' Poster'"
			/>
			<h3>{{ anime.title }}</h3>
		</a>
	</router-link>
	</div>
</template>

<script>
export default {
	props: ['anime'],
    
}
</script>

<style lang="scss" scoped>
.card {
    width: 20%;
    float: left;

	img {
		width: 200px;
		height: 300px;
		border-radius: 16px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
		transition: 0.4s;
	}
	h3 {
    font-size: 18px;
    line-height: 18px;
    white-space: nowrap;
    width: 200px;
    padding: 16px;
    color: #F1F2F6;
    transition: 0.4s;
	}
	&:hover {
		img {
			transform: scale(1.05);
		}
		h3 {
			color: #a52c1f;
		}
	}
}
</style>