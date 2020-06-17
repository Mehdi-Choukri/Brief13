(function($) { $(document).ready( function() {


var cflags = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an', 'ao', 'ar', 'as', 'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be',
	'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn', 'bo', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cd', 'cf', 'cg',
	'ch', 'ci', 'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cs', 'cu', 'cv', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz',
	'ec', 'ee', 'eg', 'eh', 'er', 'es', 'et', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gb', 'gd', 'ge', 'gf', 'gh', 'gi',
	'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gt', 'gu', 'gw', 'gy', 'hk', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il',
	'in', 'io', 'iq', 'ir', 'is', 'it', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz',
	'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv', 'ly', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm',
	'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl',
	'no', 'np', 'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py',
	'qa', 're', 'ro', 'rs', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sl', 'sm', 'sn', 'so',
	'sr', 'st', 'sv', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tr', 'tt', 'tv', 'tw',
	'tz', 'ua', 'ug', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt', 'za', 'zm', 'zw'];
/* 'CoR': Country or Region */
var locales = [
	{locale: "en_US", name: "English", CoR: "United States", flag: "us.png", date_format: "F j, Y", time_format: "g:i a"},
	{locale: "en_GB", name: "English", CoR: "United Kingdom", flag: "gb.png", date_format: "F j, Y", time_format: "g:i a"},
	{locale: "ru_RU", name: "Русский", CoR: "Russia", flag: "ru.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "ja_JP", name: "日本語", CoR: "Japan", flag: "jp.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "de_DE", name: "Deutsch", CoR: "Germany", flag: "de.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "es_ES", name: "Español", CoR: "Spain", flag: "es.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "fr_FR", name: "Français", CoR: "France", flag: "fr.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "pt_PT", name: "Português", CoR: "Portugal", flag: "pt.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "it_IT", name: "Italiano", CoR: "Italy", flag: "it.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "zh_CN", name: "中文", CoR: "China", flag: "cn.png", date_format: "Y年m月d日", time_format: "H:i"},
	{locale: "hi_IN", name: "हिन्दी", CoR: "India", flag: "in.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "pl_PL", name: "Polski", CoR: "Poland", flag: "pl.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "zh_TW", name: "漢語", CoR: "Taiwan", flag: "tw.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "tr_TR", name: "Türkçe", CoR: "Turkey", flag: "tr.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "fa_IR", name: "فارسی", CoR: "Iran", flag: "ir.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "nl_NL", name: "Nederlands", CoR: "Netherlands", flag: "nl.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "ko_KR", name: "한국어", CoR: "South Korea", flag: "kr.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "cs_CZ", name: "Čeština", CoR: "Czech Republic", flag: "cz.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "ar_EG", name: "العربية", CoR: "Egypt", flag: "eg.png", date_format: "Y-m-d", time_format: "H:i", isRTL: true},
	{locale: "vi_VN", name: "Tiếng Việt", CoR: "Vietnam", flag: "vn.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "in_ID", name: "Bahasa Indonesia", CoR: "Indonesia", flag: "id.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "el_GR", name: "Ελληνικά", CoR: "Greece", flag: "gr.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "sv_SE", name: "Svenska", CoR: "Sweden", flag: "se.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "ro_RO", name: "Română", CoR: "Romania", flag: "ro.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "hu_HU", name: "Magyar", CoR: "Hungary", flag: "hu.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "da_DK", name: "Dansk", CoR: "Denmark", flag: "dk.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "th_TH", name: "ไทย", CoR: "Thailand", flag: "th.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "sk_SK", name: "Slovenčina", CoR: "Slovakia", flag: "sk.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "fi_FI", name: "Suomi", CoR: "Finland", flag: "fi.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "bg_BG", name: "Български", CoR: "Bulgaria", flag: "bg.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "he_IL", name: "עברית", CoR: "Israel", flag: "il.png", date_format: "Y-m-d", time_format: "H:i", isRTL: true},
	{locale: "lt_LT", name: "Lietuvių", CoR: "Lithuania", flag: "lt.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "no_NO", name: "Norsk", CoR: "Norway", flag: "no.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "uk_UA", name: "Українська", CoR: "Ukraine", flag: "ua.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "hr_HR", name: "Hrvatski", CoR: "Croatia", flag: "hr.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "sr_RS", name: "Српски", CoR: "Serbia", flag: "rs.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "sl_SI", name: "Slovenščina", CoR: "Slovenia", flag: "si.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "lv_LV", name: "Latviešu", CoR: "Latvia", flag: "lv.png", date_format: "Y-m-d", time_format: "H:i"},
	{locale: "et_EE", name: "Eesti", CoR: "Estonia", flag: "ee.png", date_format: "Y-m-d", time_format: "H:i"},
]; // https://en.wikipedia.org/wiki/Languages_used_on_the_Internet
for (var i = 0; i < locales.length; i++) locales[i].label = locales[i].name;

var flagBase = (typeof ml_plugin_url !== "undefined") ? ml_plugin_url+"cflag/" : "../wp-content/plugins/more-lang/cflag/";
var ML_CFG_CHANGE = "ml_cfg_change";

if ( $('#ml-langcfg-tbl').length > 0 ) {
	var $tblBody = $('#ml-langcfg-tbl tbody#ml-langcfg-tbody');
	var inputEle = "<input type='text' class='ml-grid-input'>";
	function addLocaleRow(locale, name, label, flag, date_format, time_format, moreOpt) {
		var $newline = $("<tr>").appendTo($tblBody);
		$(inputEle).val(locale).appendTo("<td>").parent().appendTo($newline);
		$(inputEle).val(name).appendTo("<td>").parent().appendTo($newline);
		$(inputEle).val(label).appendTo("<td>").parent().appendTo($newline);
		var $flagTd = $("<td>");
		fillFlagTd($flagTd, flag);
		$flagTd.appendTo($newline);
		$(inputEle).val(date_format).appendTo("<td>").parent().appendTo($newline);
		$(inputEle).val(time_format).appendTo("<td>").parent().appendTo($newline);
		var $moreTd = $("<td>");
		fillMoreTd($moreTd, moreOpt);
		$moreTd.appendTo($newline);
		$tblBody.trigger( ML_CFG_CHANGE );
		$("#ml-up-lang-temp").clone().removeAttr("id").css("display", "").appendTo("<td>").parent().appendTo($newline).end().end().on("click", function() {
			var $theTr = $(this).parent().parent();
			$theTr.prev().before( $theTr );
			$tblBody.trigger( ML_CFG_CHANGE );
		});
		$("#ml-del-lang-temp").clone().removeAttr("id").css("display", "").appendTo($newline.find("td:last-child")).parent().end().end().on("click", function() {
			$newline.remove();
			refreshState(); // if the button is removed, the delegate event '$("#ml-langcfg-tbl").on("click", "button", ...);' will not get fired
			$tblBody.trigger( ML_CFG_CHANGE );
		});
	}

	function fillFlagTd($flagTd, flag) {
		flag = flag || "";
		$sel = $('<select></select>');
		var valExist = false;
		for (var i = 0; i < cflags.length; i++) {
			$opt = $('<option></option>').appendTo($sel);
			var optVal = cflags[i] + ".png";
			$opt.val(optVal);
			$opt.text(optVal);
			if (flag === optVal) valExist = true;
		}
		if (!valExist && flag) $('<option></option>').val(flag).text(flag).appendTo($sel);
		$sel.val(flag);
		$flagTd.append($sel);
		$sel.select2({templateResult: formatState_f, templateSelection: formatState_f, tags: true, tokenSeparators: [',', ' ']});
		$sel.data("select2").$container.addClass("ml-flag-container");
		$sel.data("select2").$dropdown.addClass("ml-flag-dropdown");
	}

	function fillMoreTd($moreTd, moreOpt) {
		moreOpt = moreOpt || {};
		var $tpl = $("#ml-moreopt-tpl");
		var $mo_div = $tpl.find(".ml-moreopt-wrap").eq(0).clone();
		$mo_div.find(".ml-moreopt-ind").on("click",
				function() { if ( $(".ml-moreopt-show").not($mo_div).length === 0 ) $mo_div.toggleClass("ml-moreopt-show"); });
		$mo_div.find(".ml-missing-content").val(moreOpt.missing_content);
		$mo_div.find(".ml-is-rtl").prop("checked", moreOpt.isRTL || false);
		$mo_div.appendTo($moreTd);
	}

	function formatState_f(state) {
		if (!state.element) { return state.text; }
		var $state = $('<span></span>').text( " " + state.text).prepend(
				$('<img alt="X">').attr('src', flagBase + state.element.value) );
		return $state;
	};

	$("#ml-add-locale").on("click", function() {
		for (var k = 0; k < locales.length; k++) {
			var loc = locales[k];
			if (loc.locale === $("#ml-locale-sel").val() ) {
				if ( $('#ml-langcfg-tbl tr td:first-child input').filter(function(){ return $(this).val() === loc.locale }).length === 0 ) {
					addLocaleRow(loc.locale, loc.name, loc.label, loc.flag, loc.date_format, loc.time_format, {isRTL: loc.isRTL});
					refreshState();
				}
				break;
			}
		}
	});
	$("#ml-create-locale").on("click", function() {
		addLocaleRow("", "", "", "", "", "");
	});
	$("#ml-locale-sel").on("change", function() {
		refreshState();
	});
	function refreshState() {
		var valLocSel = $("#ml-locale-sel").val();
		var toDisable = ( !valLocSel || $('#ml-langcfg-tbl tr td:first-child input').filter(function(){ return $(this).val() === valLocSel }).length > 0 );
		$("#ml-add-locale").prop("disabled", toDisable);
	}
	$("#ml-langcfg-tbl").on("change input", ":input", refreshState);
	$("#ml-langcfg-tbl").on("click", "button", refreshState);

	var ML_POS_INPUTMODE_SEL = "0"; // the same as "morelang_plugin.php"
	var ML_POS_INPUTMODE_TEXT = "1";
	$('input[name="ml-pos-inputmode"]').on("change", function() {
		var val = $(this).val();
		// Actually it will always be true in the current main browsers(only selected Radios will trigger 'change')
		var checked = $(this).prop("checked");
		if (val === ML_POS_INPUTMODE_SEL && checked || val === ML_POS_INPUTMODE_TEXT && !checked) {
			$("#ml-pos-text").prop("disabled", true);
			$("#ml-pos-sel").prop("disabled", false);
		}
		else {
			$("#ml-pos-text").prop("disabled", false).focus();
			$("#ml-pos-sel").prop("disabled", true);
		}
	});

	/* Initialize the form controls & values */
	function initForm() {
		if ( mlLangReady() ) {
			var tmpLangs = ml_registered_langs.slice(0); // shallow clone
			for ( var memb in tmpLangs ) {
				var langObj = tmpLangs[memb];
				addLocaleRow(langObj.locale, langObj.name, langObj.label, langObj.flag, langObj.date_format, langObj.time_format, langObj.moreOpt);
			}
		}
		else {
			var locObj = {locale: "", name: "", CoR: "", flag: "", date_format: "", time_format: ""};
			for (var i = 0; i < locales.length; i++) {
				if (locales[i].locale === ml_dft_locale) locObj = locales[i];
			}
			addLocaleRow(ml_dft_locale, locObj.name, locObj.label, locObj.flag, locObj.date_format, locObj.time_format);
		}
		if (typeof ml_opt_obj === "object" && ml_opt_obj != null) {
			$("#ml-auto-chooser").prop("checked", ml_opt_obj.ml_auto_chooser || false);
			if (ml_opt_obj.ml_pos_inputmode === ML_POS_INPUTMODE_TEXT) {
				$("#ml-pos-inputmode-text").prop("checked", true);
				/* "wp_kses( $value, wp_kses_allowed_html('post') )" will encode the HTML entities, like ">" */
				var posText = $("<textarea></textarea>").html( ml_opt_obj.ml_pos_text ).val();
				$("#ml-pos-text").prop("disabled", false).val( posText );
				$("#ml-pos-sel").prop("disabled", true);
			}
			else {
				$("#ml-pos-inputmode-sel").prop("checked", true);
				$("#ml-pos-sel").prop("disabled", false).val(ml_opt_obj.ml_pos_sel);
				$("#ml-pos-text").prop("disabled", true);
			}
			$("#ml-no-css").prop("checked", ml_opt_obj.ml_no_css || false);
			$("#ml-auto-redirect").prop("checked", ml_opt_obj.ml_auto_redirect || false);
			$("input[name=ml-url-mode][value=" + ml_opt_obj.ml_url_mode + "]").prop("checked", true);
			$("#ml-url-locale-lower-case").prop("checked", ml_opt_obj.ml_url_locale_lower_case || false);
			$("#ml-url-locale-to-hyphen").prop("checked", ml_opt_obj.ml_url_locale_to_hyphen || false);
			$("#ml-url-locale-no-country").prop("checked", ml_opt_obj.ml_url_locale_no_country || false);
			$("#ml-short-label").prop("checked", ml_opt_obj.ml_short_label || false);
			$("#ml-switcher-popup").prop("checked", ml_opt_obj.ml_switcher_popup || false);
			$("#ml-clear-when-delete-plugin").prop("checked", ml_opt_obj.ml_clear_when_delete_plugin || false);
			$("#ml-not-add-posts-column").prop("checked", ml_opt_obj.ml_not_add_posts_column || false);
		}
	}
	initForm();


	/* Prepare the input data for submitting */
	$("#ml-langcfg-form").on("submit", function() {
		var inputVal = getInputVal( true );
		if (invalidInput) {
			if (typeof invalidMsg === "string" && invalidMsg) {
				alert( invalidMsg );
			}
			return false;
		}
		$("#morelang_option").val( inputVal );
		return true;
	});

	/* Updates the state of "submit" button when changed */
	$("#ml-langcfg-tbl").on("change input " + ML_CFG_CHANGE, "*", function(evt) {
		var inputVal = getInputVal();
		if ( JSON.stringify( window.ml_opt_obj ) !== inputVal ) {
			$("input#submit").prop("disabled", false);
		}
		else {
			$("input#submit").prop("disabled", true);			
		}
		if (evt.type === ML_CFG_CHANGE) {
			/* Create tooltip for the default row */
			var $dftTd = $("#ml-langcfg-tbl").find("tbody tr:first-child td:last-child");
			if ($dftTd.length && ! $dftTd.find("#ml-dft-help").length) {
				var $mlDftHelp = $dftTd.closest("tbody").find("#ml-dft-help");
				if (! $mlDftHelp.length) {
					$mlDftHelp = $("#ml-dft-help-temp").find(".ml-tooltip").clone();
					$mlDftHelp.attr("id", "ml-dft-help").addClass("ml-tooltip-rl");
				}
				$dftTd.append(" ").append( $mlDftHelp );
			}
		}
	});
	$("#ml-langcfg-tbl").find("thead").trigger( ML_CFG_CHANGE );

	var invalidInput = false;
	var invalidMsg = "";

	/* Gets the inputs as a JSON string */
	function getInputVal( focusInvalid ) {
		invalidInput = false;
		invalidMsg = "";
		var locObjs = [];
		var idx = 0;
		var ml_opt = {ml_registered_langs: locObjs};

		ml_opt.ml_url_locale_lower_case = $("#ml-url-locale-lower-case").prop("checked");
		ml_opt.ml_url_locale_to_hyphen = $("#ml-url-locale-to-hyphen").prop("checked");
		ml_opt.ml_url_locale_no_country = $("#ml-url-locale-no-country").prop("checked");
		$("#ml-langcfg-tbl tbody tr").each(function() {
			// if (invalidInput) return;
			var locObj = {};
			var $inputs = $(this).find("input, select, textarea"); // ":input" will get unexpected elements like 'button'.
			locObj.locale = $inputs.eq(0).val().trim();
			locObj.name = $inputs.eq(1).val().trim();
			locObj.label = $inputs.eq(2).val().trim();
			locObj.flag = $inputs.eq(3).val() || "";
			locObj.date_format = $inputs.eq(4).val().trim();
			locObj.time_format = $inputs.eq(5).val().trim();
			var moreOpt = {};
			moreOpt.missing_content = $inputs.filter(".ml-missing-content").val();
			moreOpt.isRTL = $inputs.filter(".ml-is-rtl").prop("checked");
			locObj.moreOpt = moreOpt;
			if ( locObj.locale === "" ) {
				focusInvalid && $inputs.eq(0).focus();
				invalidMsg = $('#ml-opt-wrap #ml-msg-empty').text();
				invalidInput = true;
				// return;
			}
			for ( var i = 0; i < locObjs.length; i++ ) {
				if ( locObj.locale === locObjs[i].locale ) {
					focusInvalid && $inputs.eq(0).focus();
					invalidMsg = $('#ml-opt-wrap #ml-msg-duplicate').text();
					invalidInput = true;
					// return;
				}
			}
			/* 'url_locale' will be used in Frontend URL */
			var url_locale = locObj.locale;
			if ( ml_opt.ml_url_locale_lower_case ) {
				url_locale = url_locale.toLocaleLowerCase();
			}
			if ( ml_opt.ml_url_locale_no_country ) {
				var idx_ = url_locale.indexOf("_");
				if (idx_ >= 0) url_locale = url_locale.substr(0, idx_);
			}
			if ( ml_opt.ml_url_locale_to_hyphen ) {
				url_locale = url_locale.replace("_", "-");
			}
			locObj.url_locale = url_locale;

			locObjs[idx++] = locObj;
		});

		if ($("#ml-auto-chooser").prop("checked")) {
			ml_opt.ml_auto_chooser = true;
			ml_opt.ml_pos_inputmode = ML_POS_INPUTMODE_SEL;
			if ($("#ml-pos-inputmode-sel").prop("checked")) {
				ml_opt.ml_pos_sel = $("#ml-pos-sel").val();
			}
			else {
				ml_opt.ml_pos_inputmode = ML_POS_INPUTMODE_TEXT;
				ml_opt.ml_pos_text = $("#ml-pos-text").val();
			}
		}
		else {
			ml_opt.ml_auto_chooser = false;
		}
		ml_opt.ml_no_css = $("#ml-no-css").prop("checked");
		ml_opt.ml_auto_redirect = $("#ml-auto-redirect").prop("checked");
		ml_opt.ml_url_mode = $("input[name=ml-url-mode]:checked").val();
		ml_opt.ml_short_label = $("#ml-short-label").prop("checked");
		ml_opt.ml_switcher_popup = $("#ml-switcher-popup").prop("checked");
		ml_opt.ml_clear_when_delete_plugin = $("#ml-clear-when-delete-plugin").prop("checked");
		ml_opt.ml_not_add_posts_column = $("#ml-not-add-posts-column").prop("checked");

		/* Interface for extension */
		$("#ml-langcfg-tbl").trigger("ml-option-get-input-val", ml_opt);
		if ( ml_opt.err_msg ) {
			if (typeof ml_opt.err_msg === "string") invalidMsg = ml_opt.err_msg;
			invalidInput = true;
		}

		return JSON.stringify( ml_opt );
	};


	/* Generate Select2 box for pre-defined locales */
	$localeSel = $("#ml-locale-sel");
	for (var i = 0; i < locales.length; i++) {
		var $opt = $("<option></option>");
		$opt.val(locales[i].locale);
		var countryOrRegion = locales[i].CoR ? (" (" + locales[i].CoR + ")") : "";
		$opt.text(locales[i].name + countryOrRegion);
		$opt.attr("data-flag", locales[i].flag);
		$localeSel.append($opt);
	}
	$localeSel.select2({placeholder: $("#ml-opt-wrap #ml-msg-prelocale").text(),
			templateResult: formatState_l, templateSelection: formatState_l});
	function formatState_l(state) {
		if (!state.element) { return state.text; }
		var $state = $('<span><span>' + state.text + '</span><img src="' + flagBase
				+ state.element.getAttribute("data-flag") + '" /></span>');
		return $state;
	};
}


} ); } )(jQuery); // end '$(document).ready'
