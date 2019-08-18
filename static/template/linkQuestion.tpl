<?for(var i=0; i<@linkQuestion.length; i++){?>
<a class="post_hotask_list" href="forumdetail.html?uuid=<?=@linkQuestion[i].uuid?>">
	<div class="post_hotask_list_tit">
		<p><?=@linkQuestion[i].content?></p>
	</div>
	<div class="post_hotask_list_content cl">
		<p class="ans-num fl"><span><?=@linkQuestion[i].answerCount?></span>回答</p>
		<p class="focus-num fl"><span><?=@linkQuestion[i].followCount?></span>关注</p>
		<p class="from fl right">来自<span><?=@linkQuestion[i].forum?></span></p>
	</div>
</a>
<?}?>