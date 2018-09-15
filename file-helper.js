const fs = require("fs");

class FileHelper {

	static _openFile() {
		try {
			return fs.readFileSync('z.dat', {encoding: 'utf-8'});
		} catch(e) {
			console.log('Erro ao abrir arquivo');
			return null;
		}
	}

	static _getLines(file) {
		// Quebra por linhas
		const lines = file.split('\n');
		// Remove a primeira (por causa das colunas de descrição)
		lines.shift();

		return lines;
	}

	static processData() {
		const firstColumn = [];
		const secondColumn = [];
		const thirdColumn = [];
		const file = FileHelper._openFile();

		if(!file) return null;

		const lines = FileHelper._getLines(file);

		for (let line of lines) {
			const columns = line.split('\t');
			firstColumn.push(columns[0]);
			secondColumn.push(columns[1]);
			thirdColumn.push(columns[2]);
		}

		return {
			firstColumn,
			secondColumn,
			thirdColumn
		};
	}
}

module.exports = FileHelper;



