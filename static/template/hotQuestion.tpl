<?for(var i=0; i<@hotQuestion.length; i++){?>
<p class="clearfix">
	<a class="label" href=""><?=@hotQuestion[i].forum?></a>
	<i>•</i>
	<a target="_blank" href="forumdetail.html?from=index" class="content ui-nowrap-multi"><?=@hotQuestion[i].question?></a>
</p>
<?}?>