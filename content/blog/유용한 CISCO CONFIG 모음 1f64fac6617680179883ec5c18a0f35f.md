---
title: "유용한 CISCO CONFIG 모음"
date: 2025-05-17T00:00:00.000Z
tags: ["test"]
---


# 유용한 CISCO CONFIG 모음

생성일: 2025년 5월 17일 오후 9:40
마지막 수정일: 2025년 5월 17일 오후 9:44
상태: 작성중
작성자: 신유찬

# CISCO

```jsx
default interface [interface name]
ex) default interface gigabitethernet0/1

// 인터페이스에 있던 내용을 모두 삭제하고 기본 구성으로 되돌림

terminal length 0 
// show run 했을 때 한번에 다 뛰어줌 
```

["Default interface" command - Cisco IOS - JMCristobal](https://jmcristobal.com/2017/06/27/comamnd-default-interface-cisco-ios/)

[제목 없음](%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7%201f64fac6617680e885e9f63a3abe4282.csv)

# CISCO VLAN

```yaml
Occurr : 
switchport mode trunk
Command rejected: An interface whose trunk encapsulation is "Auto" can not be configured to "trunk" mode

해결법 : 
switchport trunk encapsulation dot1q
switchport mode trunk

SVI : 
interface vlan []
ip address [address] [netmask]

Switch GW Config :
ip default-gateway [gw address]
```

# NX-OS

CISCO IOS와 NX-OS의 명령어 방식과 프로토콜의 동작 방식이 조금 다름

```python
#eigrp 기능 활성화
feature eigrp 

#eigrp 인접성 형성
int g0/1 
ip address ~~
ip router eigrp 1 

#nx-os 에선 auto-summary 기능 X

```

## VDI CONFIG

### show

```jsx
show vdc details 
#vdc 지정 설정을 보여줌

show vdc membership
#각각의 vdc에 할당된 인터페이스 보여줌
```

### VDC 별로 설정보기

```jsx
switchto vdc [vdc name]
#특정 vdc로 접속

```

# QoS

```jsx

confirm-action transmit exceed drop
#임계치 내로 통신 시 포워딩하고 아닐 시 드랍 
#Traffic-policing 설정

```