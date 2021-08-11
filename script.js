(function (w) {
    var doc = w.document;
    var inputs = doc.querySelectorAll('form .form-control');
    var select = doc.querySelector('[data-select]');
    var prepare = doc.querySelector('[data-prepare]');
    var download = doc.querySelector('[data-load]');
    var banner = doc.querySelector('#checkImage');
    var checkPhone = doc.querySelector('#checkPhone');
    var phoneInput = doc.querySelector('#phone');
    var phoneWrap = doc.querySelector('#phoneWrap');
    var checkSkype = doc.querySelector('#checkSkype');
    var skypeInput = doc.querySelector('#skype');
    var skypeWrap = doc.querySelector('#skypeWrap');
    var checkIcons = doc.querySelector('#checkIcons');
    var checkLogo = doc.querySelector('#checkLogo');
    var tableSignature = doc.querySelector('#signature > tbody');
    var savedNode = null;
    var savedLogo = null;

    var logoWrap = doc.querySelector('#logoWrap');
    var bannerWrap = doc.querySelector('#imageWrap');
    var bannerInput = doc.querySelector('#image');
    var companyRadio = doc.querySelectorAll('#company input');
    var logo = doc.querySelector('.logo');
    var maxpayLogo = "data:image/png;base64,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";
    var coveryLogo = "data:image/png;base64,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";
    var genomeLogo = "data:image/png;base64,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";
    var styleName = doc.querySelector('#preparedName');

    logo.src = maxpayLogo;
    for (var i = companyRadio.length - 1; i >= 0; i--) {
      companyRadio[i].addEventListener('click', changeCompany);
    }
    function changeCompany(e) {
      switch(e.target.value) {
        case 'maxpay':
          logo.src = maxpayLogo;
          styleName.style.color = "rgb(97, 188, 0)";
          break;
        case 'covery':
          logo.src = coveryLogo;
          styleName.style.color = "rgb(0, 149, 255)";
          break;
        case 'genome':
          logo.src = genomeLogo;
          styleName.style.color = "rgb(141, 95, 230)";
      }
    }

    for (var i = inputs.length - 1; i >= 0; i--) {
      inputs[i].addEventListener('keyup', updateSignature);
    }


    checkPhone.addEventListener('click', function () {
      if (!this.checked) {
        phoneInput.disabled = true;
        removeHtmlNodes(phoneWrap);
      } else {
        phoneInput.disabled = false;
        addHtmlNodes(phoneWrap, '(937) 555-5555', 'phone');
      }
    });
    checkSkype.addEventListener('click', function () {
      if (!this.checked) {
        skypeInput.disabled = true;
        removeHtmlNodes(skypeWrap);
      } else {
        skypeInput.disabled = false;
        addHtmlNodes(skypeWrap, 'skypename', 'skype');
      }
    });
    function removeHtmlNodes(node) {
      node.innerHTML = '';
    }
    function addHtmlNodes(node, data, className) {
      var br = doc.createElement('br');
      var span = doc.createElement('span');
      span.classList.add(className);
      span.innerHTML = data;
      node.appendChild(span);
      node.appendChild(br);
    }
    
    checkLogo.addEventListener('click', function () {
      this.checked ? removeLogo() : addLogo();
    });
    function removeLogo() {
      savedLogo = logoWrap.removeChild(logoWrap.lastElementChild);
    }
    function addLogo() {
      logoWrap.appendChild(savedLogo);
    }

    function updateSignature(e) {
      var id = e.target.id;
      var value = e.target.value;
      var element = doc.querySelector('.' + id);
      // Will add later 
      // var checkBanner = banner.checked;

      if (id === 'email') {
        element.href = 'mailto:' + value;
        element.innerHTML = value;
      } else if (id === 'facebook') {
        element.href = value;
      } else if (id === 'twitter') {
        element.href = value;
      } else if (id === 'linkedin') {
        element.href = value;
      } else if (id === 'image') {
        if (checkBanner) {
          createBanner(value);
        }
      } else {
        element.innerHTML = value;
      }
      download.classList.add('is-hidden');
    }

    select.addEventListener('click', selectGmail);

    function selectGmail(event) {
      var id = event.target.dataset.signature;
      var element = doc.querySelector('#' + id);
      selectText(element);
    }

    // from SO: http://stackoverflow.com/a/987376/1592915
    function selectText(element) {
      if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (w.getSelection) {
        selection = w.getSelection();
        range = doc.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

  })(window);