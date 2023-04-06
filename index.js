const myvalues = () => {
  var br = document.getElementById("multiplicant").value;
  var qr = document.getElementById("multiplier").value;
  if (br < 0) {
    let br1 = br.slice(1);
    var max_len = Number(br1).toString(2);
    max_len = max_len.length + 1;
  } else {
    var max_len = Number(br).toString(2);
    max_len = max_len.length + 1;
  }
  let fresult = document.getElementById("fresult");
  let si = Number.parseInt(br) * Number.parseInt(qr);
  console.log(br, qr, max_len);
  if (!br || !qr || !max_len) {
    alert("Fill all the details");
    return;
  } else {
    var display = document.getElementById("display");
    var row = 1;
    if (Number.parseInt(br) < 0) {
      br = br.slice(1);
      br = Number.parseInt(br);
      br = br.toString(2).padStart(max_len, "0");
      br = twocomp(br, max_len).padStart(max_len, "0");
    } else {
      br = Number.parseInt(br);
      br = br.toString(2).padStart(max_len, "0");
    }

    if (Number.parseInt(qr) < 0) {
      qr = qr.slice(1);
      qr = Number.parseInt(qr);
      qr = qr.toString(2).padStart(max_len, "0");
      qr = twocomp(qr, max_len).padStart(max_len, "0");
    } else {
      qr = Number.parseInt(qr);
      qr = qr.toString(2).padStart(max_len, "0");
    }

    brb = twocomp(br, max_len).padStart(max_len, "0");
    brb = Number.parseInt(brb, 2);
    var ac = "";
    ac = ac.padStart(max_len, "0");
    var qn = qr[max_len - 1];
    var qnp = "0";
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = qn;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = qnp;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "Initial";
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = ac;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = qr;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = max_len;
    row++;

    console.log(br, qr, brb, ac, qn, qnp, max_len);
    console.log("Qn\tQnp\t\tOperation\tAC\t\tQr\t\tQnp\t\tSC");
    for (let i = 0; i < max_len; i++) {
      var newRow = display.insertRow(row);
      console.log(
        qn,
        "\t",
        qnp,
        "\t\t\t\t",
        ac,
        "\t",
        qr,
        "\t",
        qnp,
        "\t\t",
        max_len - i
      );
      if (qn == "1" && qnp == "0") {
        ac = sub(ac, br);
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = " ";
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = " ";
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "Subtraction: ";
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = ac;
        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = " ";
        var cell6 = newRow.insertCell(5);
        cell6.innerHTML = " ";
        row++;
        console.log("\t\tSubtraction: ", ac);
      }

      if (qn == "0" && qnp == "1") {
        ac = add(ac, br);
        var newRow = display.insertRow(row);
        var cell1 = newRow.insertCell(0);
        cell1.innerHTML = " ";
        var cell2 = newRow.insertCell(1);
        cell2.innerHTML = " ";
        var cell3 = newRow.insertCell(2);
        cell3.innerHTML = "Addition: ";
        var cell4 = newRow.insertCell(3);
        cell4.innerHTML = ac;
        var cell5 = newRow.insertCell(4);
        cell5.innerHTML = " ";
        var cell6 = newRow.insertCell(5);
        cell6.innerHTML = " ";
        row++;
        console.log("\t\tAddition: ", ac);
      }

      bit = ac[ac.length - 1];
      bit3 = ac[0];
      ac = bit3 + ac.slice(0, ac.length - 1);
      qnp = qr[qr.length - 1];
      qr = bit + qr.slice(0, qr.length - 1);
      qn = qr[qr.length - 1];
      var newRow = display.insertRow(row);
      var cell1 = newRow.insertCell(0);
      cell1.innerHTML = qn;
      var cell2 = newRow.insertCell(1);
      cell2.innerHTML = qnp;
      var cell3 = newRow.insertCell(2);
      cell3.innerHTML = "ashr";
      var cell4 = newRow.insertCell(3);
      cell4.innerHTML = ac;
      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = qr;
      var cell6 = newRow.insertCell(5);
      cell6.innerHTML = max_len - i - 1;
      row++;
    }
    console.log(
      qn,
      "\t",
      qnp,
      "\t\t\t\t",
      ac,
      "\t",
      qr,
      "\t",
      qnp,
      "\t\t",
      "0"
    );

    ans = ac + qr;
    const ans1 = ans;
    if (si < 0) {
      ans = twocomp(ans, ans.length);
      ans = Number.parseInt(ans, 2);
      console.log("Answer: -", ans);
      fresult.innerHTML = `<h3>Answer in Binary:  ${ans1}</h3>
                            <h3>Answer : - ${ans}</h3>`;
    } else {
      ans = Number.parseInt(ans, 2);
      console.log("Answer: ", ans);
      fresult.innerHTML = `<h3>Answer in Binary:  ${ans1}</h3>
                            <h3>Answer : - ${ans}</h3>`;
    }
  }

  function twocomp(a, l) {
    let bar = "";
    let len = Number.parseInt(l);
    for (let i = 0; i < len; i++) {
      if (a[i] === "1") {
        bar = bar + "0";
      } else {
        bar = bar + "1";
      }
    }

    bar = (parseInt(bar, 2) + 1).toString(2);
    return bar;
  }

  function add(a, b) {
    a = Number.parseInt(a, 2);
    b = Number.parseInt(b, 2);
    let res = (a + b).toString(2);
    res = res.padStart(max_len, "0");
    if (res.length > max_len) {
      res = res.slice(1);
    }
    return res;
  }

  function sub(a, b) {
    a = Number.parseInt(a, 2);
    b = Number.parseInt(b, 2);
    if (a < b) {
      var res = (a + brb).toString(2);
      res = res.padStart(max_len, "0");
    } else {
      var res = (a - b).toString(2);
      res = res.padStart(max_len, "0");
    }
    return res;
  }
};
