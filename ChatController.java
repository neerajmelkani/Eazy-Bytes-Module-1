package com.example.chatapp.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
  @MessageMapping("/send")
  @SendTo("/topic/messages")
  public String send(String message) {
    return message;
  }
}