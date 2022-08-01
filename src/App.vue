<template>
  <div class="view">
    <header>Welcome to Anonymous Chat</header>

    <section class="chat">
      <div
        v-for="message in state.messages"
        :key="message.key"
        :class="
          message.userId == state.userId ? 'message current-user' : 'message'
        "
      >
        <div class="content">{{ message.content }}</div>
        <div class="timestamp">{{ getDateString(message.timestamp) }}</div>
      </div>
    </section>

    <footer>
      <form @submit.prevent="SendMessage">
        <input
          type="text"
          v-model="state.input"
          placeholder="Write a message..."
        />
        <button type="submit">Send</button>
      </form>
    </footer>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { v4 as uuid } from "uuid";
import db from "./db";

export default {
  setup() {
    const state = reactive({
      userId: "",
      input: "",
      messages: [],
    });

    const getDateString = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString();
    };

    const SendMessage = () => {
      const messagesRef = db.database().ref("messages");

      if (state.input === "" || state.input === null) {
        return;
      }

      const message = {
        userId: state.userId,
        content: state.input,
        timestamp: +new Date(),
      };

      messagesRef.push(message);
      state.input = "";

      setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 0);
    };

    onMounted(() => {
      if (sessionStorage.getItem("userId")) {
        state.userId = sessionStorage.getItem("userId");
      } else {
        state.userId = uuid();
        sessionStorage.setItem("userId", state.userId);
      }

      const messagesRef = db.database().ref("messages");

      messagesRef.on("value", (snapshot) => {
        const data = snapshot.val() || {};
        let messages = [];

        Object.keys(data).forEach((key) => {
          messages.push({
            id: key,
            userId: data[key].userId,
            content: data[key].content,
            timestamp: data[key].timestamp,
          });
        });

        state.messages = messages;
      });
    });

    return {
      state,
      getDateString,
      SendMessage,
    };
  },
};
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #393d3f;
  background: #fdfdff;

  header {
    background-color: #546A7B;
    padding: 10px 30px;
    color: #fff;
    position: sticky;
    top: 0px;
  }

  .chat {
    flex: 1 1 100%;
    background-color: #fff;
    padding: 30px;

    .message {
      max-width: 75%;
      width: fit-content;
      background-color: #edf1f2;
      border-radius: 5px;
      color: #393D3F;
      padding: 5px 5px;
      border: 1px solid #62929E;

      & + .message {
        margin-top: 15px;
      }

      .timestamp {
        font-size: 0.8em;
        color: #546A7B;
        margin-top: 10px;
        text-align: left;
      }

      &.current-user {
        margin-left: auto;
        background-color: #e1f9ff;

        .timestamp {
          text-align: right;
        }
      }
    }
  }


  footer {
    position: sticky;
    bottom: 0px;
    background-color: #fff;
    padding: 20px 30px;
    box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);

    form {
      display: flex;

      input[type="text"] {
        flex: 1 1 100%;

        appearance: none;
        border: none;
        outline: none;
        background: none;

        display: block;
        width: 100%;
        padding: 10px 15px;
        border-radius: 8px 0px 0px 8px;

        color: #333;
        font-size: 18px;

        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        background-color: #edf1f2;

        transition: 0.4s;

        &::placeholder {
          color: #888;
          transition: 0.4s;
        }
      }

      button[type="submit"] {
        appearance: none;
        border: none;
        outline: none;
        background: none;

        display: block;
        padding: 10px 15px;
        border-radius: 0px 8px 8px 0px;

        background-color: #62929E;

        color: #fff;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>