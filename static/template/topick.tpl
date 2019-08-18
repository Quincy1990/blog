<?for(var i=0; i<@topick.length; i++){?>
<div class="pb_position b">
	<div class="pb_position_header cf">
		<div class="pb_position_header_left">
			<em>[活动]</em>
			<a target="_blank" class="ptitle" href="forumdetail.html?uuid=<?=@topick[i].uuid?>" data-click="onClick" data-block="LIST" data-element="1" style="color: black;">
				<p><?=@topick[i].title?></p>
			</a>
		</div>
	</div>
	<div class="pcontentwrap">
		<p class="pcontent"><?=@topick[i].subtitle?></p>
	</div>
	<div class="pref">
		<div class="ptag">
			<?for(var j=0; j<@topick[i].tags.split(',').length; j++){?>
				<a href="search.html?keywords=<?=@topick[i].tags.split(',')[j]?>" target="_blank"><p><?=@topick[i].tags.split(',')[j]?></p></a>
			<?}?>
		</div>
		<div class="pinfo">
			<p class="author"><span></span><a href="lecturerdetail.html"><?=@topick[i].owner?></a></p>
			<p class="popular"><span></span><?=@topick[i].peopleCount?>人参与</p>
			<p class="publish_time"><?=@topick[i].publishDate?></p>
		</div>
	</div>
</div>
<?}?>