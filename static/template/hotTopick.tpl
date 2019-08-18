<?for(var i=0; i<@hotTopick.length; i++){?>
<a class="post_hotask_list" href="forumdetail.html?uuid=<?=@hotTopick[i].uuid?>">
	<div class="post_hotask_list_tit">
		<p><?=@hotTopick[i].content?></p>
	</div>
	<div class="post_hotask_list_content cl">
		<p class="ans-num fl"><span><?=@hotTopick[i].answerCount?></span>回答</p>
		<p class="focus-num fl"><span><?=@hotTopick[i].followCount?></span>关注</p>
		<p class="from fl right">来自<span><?=@hotTopick[i].forum?></span></p>
	</div>
</a>
<?}?>