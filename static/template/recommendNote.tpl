<?for(var i=0; i<@recommendNote.length; i++){?>
<p class="clearfix">
	<a class="label" href=""><?=@recommendNote[i].tag?></a>
	<i>•</i>
	<a target="_blank" href="forumdetail.html?from=index" class="content ui-nowrap-multi"><?=@recommendNote[i].summary?></a>
</p>
<?}?>