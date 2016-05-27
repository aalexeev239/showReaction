/* Uncomment to make a bookmarlet */
// javascript:
(function showReaction(){

	/* SETUP: your GitHub username */
	var USERNAME = 'aalexeev239';

	/* SETUP: favorite REACTION */
	var REACTION = 'tada';

	var elts = document.querySelectorAll('.js-details-container.outdated-diff-comment-container');
	var total = [];
	for (var i = elts.length - 1; i>=0; i--) {
		var elt = elts[i];
		var table = elt.querySelector('.js-inline-comments-container');
		if (!table || elt.classList.contains('open')) {
			continue;
		}
		var lastComment = table.children[table.children.length - 1];
		/* TODO: improve selection. This fails if several people reacted */
		var btns = [].slice.call(lastComment.querySelectorAll('.reaction-summary-item')).filter(function (btn) {
			var label = btn.getAttribute('aria-label');
			return label.indexOf(USERNAME) === 0;
		});
		var flag = true;
		for (var j = btns.length - 1; j>=0; j--) {
			var labels = btns[j].value.split(' ');
			if (labels.indexOf(REACTION) >= 0) {
				flag = false;
			}
		}
		if (!flag) {
			continue;
		}
		total.push(elt);
		var hdr = elt.querySelector('.discussion-item-header');
		var toggle = hdr.querySelector('.discussion-item-toggle-closed');

		hdr.style.backgroundColor = '#DD3535';
		toggle.click();
	}
	if (total.length) {
		alert(total.length+' comments were opened');
	} else {
		alert('nothing to open');
	}
})();
