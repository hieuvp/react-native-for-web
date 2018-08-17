import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

// Model
class Board {

  constructor() {
    const size = 3;
    const grid = Array(size);
    for (let i = 0; i < size; i++) {
      let row = Array(size);
      for (let j = 0; j < size; j++) {
        row[j] = 0;
      }
      grid[i] = row;
    }
    this.grid = grid;
  }

  mark(row, col, player) {
    this.grid[row][col] = player;
    return this;
  }

  hasMark(row, col) {
    return this.grid[row][col] !== 0;
  }

  winner() {
    for (let i = 0; i < 3; i++) {
      if (this.grid[i][0] !== 0 && this.grid[i][0] === this.grid[i][1] &&
        this.grid[i][0] === this.grid[i][2]) {
        return this.grid[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (this.grid[0][i] !== 0 && this.grid[0][i] === this.grid[1][i] &&
        this.grid[0][i] === this.grid[2][i]) {
        return this.grid[0][i];
      }
    }

    if (this.grid[0][0] !== 0 && this.grid[0][0] === this.grid[1][1] &&
      this.grid[0][0] === this.grid[2][2]) {
      return this.grid[0][0];
    }

    if (this.grid[0][2] !== 0 && this.grid[0][2] === this.grid[1][1] &&
      this.grid[0][2] === this.grid[2][0]) {
      return this.grid[0][2];
    }

    return null;
  }

  tie() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.grid[i][j] === 0) {
          return false;
        }
      }
    }
    return this.winner() === null;
  }
}

// Cell X
// Cell O
class Cell extends Component {

  cellStyle() {
    const { player } = this.props;

    switch (player) {
      case 1:
        return styles.cellX;
      case 2:
        return styles.cellO;
      default:
        return null;
    }
  }

  textStyle() {
    const { player } = this.props;

    switch (player) {
      case 1:
        return styles.cellTextX;
      case 2:
        return styles.cellTextO;
      default:
        return {};
    }
  }

  textContents() {
    const { player } = this.props;

    switch (player) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  }

  render() {
    const { onPress } = this.props;

    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor="transparent"
        activeOpacity={0.5}
        style={styles.cellContainer}
      >
        <View style={[styles.cell, this.cellStyle()]}>
          <Text style={[styles.cellText, this.textStyle()]}>
            {this.textContents()}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

// Game End
const GameEndOverlay = (props) => {
  const { board, onRestart } = props;
  const tie = board.tie();
  const winner = board.winner();

  if (!winner && !tie) {
    return <View />;
  }

  let message;
  if (tie) {
    message = 'It\'s a tie!';
  } else {
    message = (winner === 1 ? 'X' : 'O') + ' wins!';
  }

  return (
    <View style={styles.overlay}>
      <Text style={styles.overlayMessage}>{message}</Text>
      <TouchableHighlight
        onPress={onRestart}
        underlayColor="transparent"
        activeOpacity={0.5}>
        <View style={styles.newGame}>
          <Text style={styles.newGameText}>New Game</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// Main Component
class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return { board: new Board(), player: 1 };
  }

  restartGame = () => {
    this.setState(this.initialState);
  };

  nextPlayer = () => {
    const { player } = this.state;

    return player === 1 ? 2 : 1;
  };

  handleCellPress = (row, col) => () => {
    const { board, player } = this.state;

    if (board.hasMark(row, col)) {
      return;
    }

    this.setState({
      board: board.mark(row, col, player),
      player: this.nextPlayer(),
    });
  };

  render() {
    const { board } = this.state;

    const rows = board.grid.map((cells, row) =>
      <View key={'row' + row} style={styles.row}>
        {cells.map((player, col) =>
          <Cell
            key={'cell' + col}
            player={player}
            onPress={this.handleCellPress(row, col)}
          />
        )}
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>ShopBack Vietnam</Text>
        <View style={styles.board}>
          {rows}
        </View>
        <GameEndOverlay
          board={board}
          onRestart={this.restartGame}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  board: {
    flexDirection: 'column',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#47525d',
  },
  row: {
    flexDirection: 'row',
  },
  cellContainer: {
    width: 90,
    height: 90
  },
  cell: {
    width: 80,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#7b8994',
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellX: {
    backgroundColor: '#72d0eb',
  },
  cellO: {
    backgroundColor: '#7ebd26',
  },
  cellText: {
    borderRadius: 5,
    fontSize: 50,
  },
  cellTextX: {
    color: '#19a9e5',
  },
  cellTextO: {
    color: '#b9dc2f',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayMessage: {
    fontSize: 40,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  newGame: {
    backgroundColor: '#887765',
    padding: 20,
    borderRadius: 5,
  },
  newGameText: {
    color: 'white',
    fontSize: 20,
  },
});

export default TicTacToe;
