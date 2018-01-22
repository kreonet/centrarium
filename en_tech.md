---
layout: page
title: Technology
lang: en
toc: false
permalink: /en/tech/
cover: /assets/covers/tech.jpg
---

## Technologies in eduroam

![eduroam Architecture](/assets/eduroam-arch-en.png)

eduroam is a WiFi service based on `WPA-2 Enterprise` and `ID Federation`.

`WPA2-Enterprise` is the most secure WiFi encryption method that every user connect network with different `user credentials`. External authentication server receives user credentials - ID, password, OTP - and allows authorized users to access WiFi access.

`ID Federation` allows `user credentials` to be processed by user's home institute. This allows users to use licensed services at visited instutute by logging in home institute. This is accomplished through the routing of user credentials over a trusted network of RADIUS servers.


## eduroam Components

eduroam is composed of `Service Provider(SP)`, `ID Provider(IdP)`, and `Roaming Operator(RO)`.

`Service Provider(SP)` serves AP for eduroam. SP connected with IdPs via RO, and serves WiFi network to users of IdP's.

`ID Provider(IdP)` issues and manages eduraom accounts. IdP isseus eduroam accounts to its own trusted users. eduroam committee(Korea) recommends to link its own e-ID server with eduroam authentication server. In this case, users connect eduroam with their E-mail ID and password without request for eduroam account. IdP is responsible to manage and maintain security of its eduraom accounts.

`Roaming Operator (RO)` links IdPs and SPs. RO passes the `user credentials` to the appropriate IdPs. `National RO(NRO)` is representative for the country. It is linked to the world as well as the whole country. It enables local users to use eduroam outside, and foreigners to use local eduroam.
