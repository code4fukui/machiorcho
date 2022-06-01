const get = (id) => document.getElementById(id);

export const startQuiz = function(title, quiz, callback) {
	let nq = 0
	let pnt = 0
	let uienable = true

	const show = function(aquiz) {
		head.textContent = title + " - 第" + (nq + 1) + "問 / " + quiz.length + "問"
		ind.textContent = ""
		for (let i = 0; i < 2; i++) {
			const div = get("ans" + (i + 1))
			div.className = ""
			div.textContent = aquiz[1 + i]
			div.no = i
			div.onclick = function() {
				if (!uienable)
					return
				if (this.no == (aquiz[3] ? 0 : 1)) {
					ind.textContent = "正解"
					ind.className = "indcorrect"
					this.className = "correct"
					uienable = false
					pnt++
				} else {
					ind.textContent = "不正解"
					ind.className = "indincorrect"
					this.className = "disable"
					uienable = false
				}
				setTimeout(function() {
					nq++
					if (nq < quiz.length) {
						show(quiz[nq])
					} else {
						ind.textContent = "クリア"
						ind.className = "indclear"
						if (callback) {
							setTimeout(function() {
								callback(pnt)
							}, 1000)
						}
					}
				}, 1000)
			}
		}
		q.textContent = aquiz[0]
		uienable = true
	}

	show(quiz[nq])
}
