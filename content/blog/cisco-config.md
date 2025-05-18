---
title: "유용한 CISCO CONFIG 모음"
date: 2025-05-17T00:00:00.000Z
tags: ["test"]
author: "IdiotonC"
---

# CISCO

```bash
default interface [interface name]
# ex) default interface gigabitethernet0/1
# 인터페이스에 있던 내용을 모두 삭제하고 기본 구성으로 되돌림

terminal length 0
# show run 했을 때 한번에 다 뛰어줌
```

["Default interface" command - Cisco IOS - JMCristobal](https://jmcristobal.com/2017/06/27/comamnd-default-interface-cisco-ios/)

## CISCO 장비 단축키

| Keystroke                | Description                                                                                 | 해석                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Tab                      | Completes a partial command name entry.                                                     | 부분적으로 기입된 command 완성 → command 자동완성           |
| Backspace                | Erases the character to the left of the cursor.                                             | 커서의 왼쪽부터 문자를 지움                                 |
| Ctrl+D                   | Erases the character at the cursor.                                                         | 커서 위치의 문자를 지움                                     |
| Ctrl+K                   | Erases all characters from the cursor to the end of the command line.                       | 커서부터 끝까지의 문자를 지움                               |
| Esc D                    | Erases all characters from the cursor to the end of the word.                               | 커서부터 단어의 끝까지 지움 (한 단어씩 지울 수 있는 단축키) |
| Ctrl+U / Ctrl+X          | Erases all characters from the cursor back to the beginning of the command line.            | 커서에서부터 명령줄의 시작 부분까지 모든 문자를 지움        |
| Ctrl+W                   | Erases the word to the left of the cursor.                                                  | 커서 왼쪽의 단어를 지움                                     |
| Ctrl+A                   | Moves the cursor to the beginning of the line.                                              | 커맨드의 맨 처음으로 돌아감                                 |
| Left Arrow / Ctrl+B      | Moves the cursor one character to the left.                                                 | 커서 왼쪽 문자로 한칸씩 이동                                |
| Esc B                    | Moves the cursor back one word to the left.                                                 | 커서 왼쪽에 있는 단어 앞으로 커서를 옮김                    |
| Esc F                    | Moves the cursor forward one word to the right.                                             | 커서 오른쪽에 있는 단어 뒤로 커서를 옮김                    |
| Right Arrow / Ctrl+F     | Moves the cursor one character to the right.                                                | 커서 오른쪽 문자로 한칸씩 이동                              |
| Ctrl+E                   | Moves the cursor to the end of command line.                                                | 커맨드의 끝 부분으로 커서 이동                              |
| Up Arrow / Ctrl+P        | Recalls the previous command in the history buffer, beginning with the most recent command. | 히스토리 버퍼에서 가장 최근의 커맨드부터 커맨드를 불러옴    |
| Down Arrow / Ctrl+N      | Goes to the next line in the history buffer.                                                | 히스토리 버퍼에서 다음 줄로 이동                            |
| Ctrl+R / Ctrl+I / Ctrl+L | Redisplays the system prompt and command line after a console message is received           | 콘솔 로그 메시지를 받거나 하여 프롬프트를 다시 불러옴       |

## CISCO VLAN

```bash
# Occurr
switchport mode trunk
# Command rejected: An interface whose trunk encapsulation is "Auto" can not be configured to "trunk" mode

# 해결법
switchport trunk encapsulation dot1q
switchport mode trunk

# SVI
interface vlan [VLAN 번호]
ip address [address] [netmask]

# Switch GW Config
ip default-gateway [gw address]
```

## NX-OS

CISCO IOS와 NX-OS의 명령어 방식과 프로토콜의 동작 방식이 조금 다름

```bash
# eigrp 기능 활성화
feature eigrp

# eigrp 인접성 형성
int g0/1
ip address ...
ip router eigrp 1

# nx-os 에선 auto-summary 기능 X
```

### VDI CONFIG

#### show

```bash
show vdc details
# vdc 지정 설정을 보여줌

show vdc membership
# 각각의 vdc에 할당된 인터페이스 보여줌
```

#### VDC 별로 설정보기

```bash
switchto vdc [vdc name]
# 특정 vdc로 접속
```

## QoS

```bash
confirm-action transmit exceed drop
# 임계치 내로 통신 시 포워딩하고 아닐 시 드랍
# Traffic-policing 설정
```
