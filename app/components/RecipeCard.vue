<script setup lang="ts">
import { type Recipe } from "../../types/types";
import BaseBtn from "./BaseBtn.vue";

defineProps<{
	recipe: Recipe;
}>();
</script>

<template>
	<div class="flex flex-col shadow rounded-md">
		<NuxtLink :to="`/recipes/${recipe.id}`">
			<NuxtImg
				:src="recipe.image"
				sizes="xs:100vw sm:50vw lg:400px"
				format="webp"
				densities="x1"
				alt=""
				class="rounded-t-md"
			/>
		</NuxtLink>
		<div class="flex flex-col py-6 px-4 flex-1">
			<NuxtLink :to="`/recipes/${recipe.id}`">
				<p class="text-xl lg:text-2xl font-semibold mb-2">{{ recipe.name }}</p>
			</NuxtLink>
			<div
				class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto"
			>
				<div class="flex items-center gap-1">
					<Icon 
						name="i-mdi-clock-time-eight-outline"
						class="text-dodgeroll-gold"
					/>
					<span>{{ recipe.cookTimeMinutes }}</span>
				</div>
				<div class="flex items-center gap-1">
					<Icon  name="i-mdi-fire" class="text-dodgeroll-gold" />
					<span>{{ recipe.caloriesPerServing }}</span>
				</div>
				<div class="flex items-center gap-1">
					<Icon  name="i-mdi-star" class="text-dodgeroll-gold" />
					<span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
				</div>
			</div>
			<BaseBtn
				:ui="{
					base: 'self-start',
				}"
				:to="`/recipes/${recipe.id}`"
				label="View"
			/>
		</div>
	</div>
</template>
