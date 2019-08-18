<?for(var i=0; i<@famousTeacher.length; i++){?>
<div class="lists-content-card col-lg-2-4 col-md-3 col-sm-3 col-xs-6">
	<a target="_blank" class="teacher-card g-shadow" href="lecturerdetail.html?id=<?=@famousTeacher[i].id?>">
		<div class="teacher-card-cover" style="background:url(<?=@famousTeacher[i].image?>) center center no-repeat;background-size:cover;"></div>
		<div class="teacher-card-content">
			<h3 class="teacher-card-name ui-nowrap-flex"><?=@famousTeacher[i].teacherName?></h3>
			<p class="teacher-card-school ui-nowrap-flex"><?=@famousTeacher[i].from?></p>
			<p class="teacher-card-detail ui-nowrap-multi-4"><?=@famousTeacher[i].summary?></p>
		</div>
	</a>
</div>
<?}?>