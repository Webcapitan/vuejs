<template>
    <main class="page-wrap edit">
        <div class="show-templates" :class="{visible : toggleLeftSidebar}" @click="leftSideBar = true">
            <i class="fas fa-chevron-right"></i>
        </div>
        <div class="left-sidebar" @mouseleave="colorPickerHide" :class="{hide : isShowSidebar}">
            <div class="templates-block">
                <i class="icon-close" @click="leftSideBar = false"></i>
                <span class="title">Edit Templates</span>
                <div class="templates-wrapper">
                    <div class="templates-inner">

                        <image-template @addressEmpty="getAddress" @addressEmpty2="getAddress2" :metadata="metadata" :addinginfo="adding_info" :templateid="templateid" :formfields="formFields" :colorVis="colorPickerVisibility"></image-template>

                    </div>
                </div>
                <a :href="url" class="back"><i class="fas fa-arrow-left"></i>BACK</a>
            </div>
        </div>
    
        <div class="template">

            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width:100%;">
                <tr>
                    <td style="padding: 0 0 50px 0" align="center">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:600px;margin:0 auto;">
                            <tr>
                                <td style="padding:0;position:relative;">

<table  v-if="templateid == 1 ? showFunc1 : seen1=false" ref="template1" class="temp1" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;margin: 50px auto 0;display: table">

    <tr>
        <td style="padding: 0 15px">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width: 600px;margin: 0 auto;border:0;background: #fff;">

                <tr>
                    <td style="padding:0">


                    <table class="head" style="width: 600px; min-height: 90px;border-spacing: 0;vertical-align:middle">
                        <tr>
                            <td style="padding: 0 20px;width:50%">
                                <!--<img-img :img="metadata.logo" :imgwidth="189"></img-img>-->
                                <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                            </td>
                            <td style="padding: 0 20px;width:50%" align="right">
                                <a @click.prevent :href="metadata.title2.href.changed != null ? metadata.title2.href.changed : metadata.title2.href.default" target="_blank"
                                    style="word-break: break-word;text-decoration:none;text-align: right;font-family: sans-serif;font-size: 36px;font-weight: 300;color: #01bbea" :style="{color : metadata.accentColor}">
                                    {{metadata.title2.changed != null ? metadata.title2.changed : metadata.title2.default}}
                                </a>
                            </td>
                        </tr>
                    </table>
                
                    <img-img :img="metadata.img" :imgwidth="600"></img-img>

                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;width:600px;border-right-width: 0px;border-top-width: 0px; border-bottom-width: 0px;border-left-width: 0px;display:table">
                        <tr border="0">
                            <th border="0" style="vertical-align: top">
                                <table cellpadding="0" cellspacing="0" border="0" 
                                        style="border-collapse: collapse;border-spacing:0;width:450px;border-top-width: 0px; border-bottom-width: 0px;border-left-width: 0px;display:table">
                                    <tr border="0">
                                        <td valign="top" style="padding:0;" border="0">
                                            <img-img :img="metadata.photo1" :imgwidth="150" style="float:left"></img-img>
                                        </td>
                                        <td valign="top" style="padding:0;" border="0">
                                            <img-img :img="metadata.photo2" :imgwidth="150" style="float:left"></img-img>
                                        </td>
                                        <td valign="top" style="padding:0;" border="0">
                                            <img-img :img="metadata.photo3" :imgwidth="150" style="float:left"></img-img>
                                        </td>                   
                                    </tr>
                                </table>

                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;width:450px;display:table">
                                    <tr border="0" >
                                        <td valign="top" border="0" style="padding: 25px">

                                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;border-collapse: collapse;border-spacing:0;border: 0px;">
                                                <tr>
                                                    <td style="padding: 0 0 20px 0">

                                                        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;border-collapse: collapse;border-spacing:0;border: 0px;">
                                                            <tr>
                                                                <td align="center" style="padding: 0 0 20px 0;">
                                                                    <a @click.prevent :href="metadata.title3.href.changed != null ? metadata.title3.href.changed : metadata.title3.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;text-align:center;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                        :style="{color : metadata.accentColor}">

                                                                        {{metadata.title3.changed != null ? metadata.title3.changed : metadata.title3.default}}

                                                                    </a>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <span style="word-break: break-word;display:block;text-align:left;color: #333;font-size: 14px;font-family: sans-serif;line-height: 20px;font-weight: 400;padding: 0;">
                                                                        
                                                                        {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}

                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </table>


                                            <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;border-collapse: collapse;border-spacing:0;border: 0px;">
                                                <tr>
                                                    <td style="padding: 0 0 20px 0" align="center">

                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;">
                                                            <tr>
                                                                <td style="padding:0;" align="center">
                                                                    <a @click.prevent :href="metadata.title4.href.changed != null ? metadata.title4.href.changed : metadata.title4.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                       :style="{color : metadata.accentColor}">

                                                                        {{metadata.title4.changed != null ? metadata.title4.changed : metadata.title4.default}}

                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0" align="left">

                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;padding: 15px 0 0;margin:0;vertical-align:top;text-align:left;position:relative">
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                :style="{background: metadata.accentColor}">
                                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                                </span>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <a @click.prevent :href="metadata.listItem.item1.href.changed != null ? metadata.listItem.item1.href.changed : metadata.listItem.item1.href.default" target="_blank" 
                                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                    {{metadata.listItem.item1.changed != null ? metadata.listItem.item1.changed : metadata.listItem.item1.default}}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                      :style="{background: metadata.accentColor}">
                                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                                </span>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <a @click.prevent :href="metadata.listItem.item2.href.changed != null ? metadata.listItem.item2.href.changed : metadata.listItem.item2.href.default" target="_blank" 
                                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                    {{metadata.listItem.item2.changed != null ? metadata.listItem.item2.changed : metadata.listItem.item2.default}}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                      :style="{background: metadata.accentColor}">
                                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                                </span>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <a @click.prevent :href="metadata.listItem.item3.href.changed != null ? metadata.listItem.item3.href.changed : metadata.listItem.item3.href.default" target="_blank" 
                                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                    {{metadata.listItem.item3.changed != null ? metadata.listItem.item3.changed : metadata.listItem.item3.default}}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                      :style="{background: metadata.accentColor}">
                                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                                </span>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <a @click.prevent :href="metadata.listItem.item4.href.changed != null ? metadata.listItem.item4.href.changed : metadata.listItem.item4.href.default" target="_blank" 
                                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                    {{metadata.listItem.item4.changed != null ? metadata.listItem.item4.changed : metadata.listItem.item4.default}}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0">
                                                                    <table>
                                                                        <tr>
                                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                      :style="{background: metadata.accentColor}">
                                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                                </span>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <a @click.prevent :href="metadata.listItem.item5.href.changed != null ? metadata.listItem.item5.href.changed : metadata.listItem.item5.href.default" target="_blank" 
                                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                    {{metadata.listItem.item5.changed != null ? metadata.listItem.item5.changed : metadata.listItem.item5.default}}
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                        <table style="width: 100%;" :style="{display : address}">
                                                            <tr>
                                                                <td style="padding: 0;" align="center">
                                                                    <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                          :style="{color : metadata.accentColor}">Address</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 20px 0;" align="center">
                                                                    <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                                                       style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                                                       :style="{color : metadata.accentColor}">
                                                                        {{metadata.brokerage_address}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                        <table :style="{display : links}" style="width: 100%">
                                                            <tr>
                                                                <td style="padding: 0;width: 100%;">
                                                                    <table style="width: 100%">
                                                                        <tr>
                                                                            <td style="padding: 0;width: 100%;" align="center">
                                                                                <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900;"
                                                                                      :style="{color : metadata.accentColor}">
                                                                                    Links
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0;width: 100%;">
                                                                    <table style="width: 100%">
                                                                        <tr>
                                                                            <td :style="{display: link1}"
                                                                                style="padding: 0;width: 50%;" align="center">
                                                                                <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                                                   :style="{color : metadata.accentColor}">{{metadata.link1.title}}</a>
                                                                            </td>
                                                                            <td :style="{display: link2}"
                                                                                style="padding: 0;width: 50%;" align="center">
                                                                                <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                                                   :style="{color : metadata.accentColor}">{{metadata.link2.title}}</a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>

                                                    </td>
                                                </tr>
                                            </table>
                                            

                                            
                                        </td>
                                    </tr>
                                </table>
                            </th>

                            <th border="0" style="vertical-align: middle;" :bgcolor="metadata.accentColor">
                                    <table style="height:100%;width:150px;display:block;">

                                        <tr border="0">
                                            <td valign="top" style="padding:30px 0">
                                                
                                                <table cellpadding="0" cellspacing="0" border="0" style="width:150px;border-collapse: collapse;border-spacing:0" align="center">
                                                    <tr>
                                                        <td valign="top" style="padding:0 0 20px 0" align="center">
                                                            <a @click.prevent :href="metadata.title5.href.changed != null ? metadata.title5.href.changed : metadata.title5.href.default" target="_blank" 
                                                                style="word-break: break-word;text-decoration:none;text-align: center;color: #fff;font-size: 16px;font-family: sans-serif;font-weight: 700;text-transform: uppercase;display: block;">
                                                                {{metadata.title5.changed != null ? metadata.title5.changed : metadata.title5.default}}
                                                            </a>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td valign="top" style="padding:0 0 20px 0" align="center">
                                                            <img-img :img="metadata.propimg1" :imgwidth="50"></img-img>

                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                                <tr>
                                                                    <td style="padding:8px 0 0 0" align="center">
                                                                        <a @click.prevent :href="metadata.subtext1.href.changed != null ? metadata.subtext1.href.changed : metadata.subtext1.href.default" target="_blank" 
                                                                                style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                            {{metadata.subtext1.changed != null ? metadata.subtext1.changed : metadata.subtext1.default}}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td valign="top" style="padding:0 0 20px 0" align="center">
                                                            <img-img :img="metadata.propimg2" :imgwidth="50"></img-img>

                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                                <tr>
                                                                    <td style="padding:8px 0 0 0" align="center">
                                                                        <a @click.prevent :href="metadata.subtext2.href.changed != null ? metadata.subtext2.href.changed : metadata.subtext1.href.default" target="_blank" 
                                                                                style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                            {{metadata.subtext2.changed != null ? metadata.subtext2.changed : metadata.subtext2.default}}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td valign="top" style="padding:0 0 20px 0" align="center">
                                                            <img-img :img="metadata.propimg3" :imgwidth="50"></img-img>

                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                                <tr>
                                                                    <td style="padding:8px 0 0 0" align="center">
                                                                        <a @click.prevent :href="metadata.subtext3.href.changed != null ? metadata.subtext3.href.changed : metadata.subtext1.href.default" target="_blank" 
                                                                                style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                            {{metadata.subtext3.changed != null ? metadata.subtext3.changed : metadata.subtext3.default}}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td valign="top" style="padding:0 0 20px 0" align="center">
                                                            <img-img :img="metadata.propimg4" :imgwidth="50"></img-img>

                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                                <tr>
                                                                    <td style="padding:8px 0 0 0" align="center">
                                                                        <a @click.prevent :href="metadata.subtext4.href.changed != null ? metadata.subtext4.href.changed : metadata.subtext1.href.default" target="_blank" 
                                                                                style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                            {{metadata.subtext4.changed != null ? metadata.subtext4.changed : metadata.subtext4.default}}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                            </th>
                        </tr>
                    </table>

                    </td>
                </tr>

                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;position: relative;background: #111111;width:600px">
                    <tbody>
                        <td style="padding: 30px 20px;">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width:100%;vertical-align: middle;">
                                <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                    <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref" :imgwidth="100"></userphoto-component>

                                </td>
                                <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#fff;">
                                                    OFFERED BY
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a
                                                    style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                                   :style="{color : metadata.accentColor}">
                                                    {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a
                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.designations}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a  :href="`tel:${adding_info.phone}`"
                                                    style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.phone}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`mailto:${adding_info.email}`"
                                                    style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.email}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td style="padding:0">
                                                <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                                   style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{metadata.company_address}}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                                <td style="padding: 0;vertical-align: middle;">
                                    <table  cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0" align="right">
                                        <tr>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                                <a :href="adding_info.facebook">
                                                    <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                                <a :href="adding_info.twitter">
                                                    <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                                <a :href="adding_info.linkedin">
                                                    <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </table>
                        </td>
                    </tbody>
                </table>

            </table>
        </td>
    </tr>
</table>

<table  v-if="templateid == 2 ? showFunc2 : seen2=false" ref="template2" class="temp2"  cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;margin: 50px auto 0;display: table">
        <tr>
            <td style="padding: 0 15px">
                    
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                    <tr>
                        <td style="padding:35px 0 0 0;">
                            <block-component :metadata="metadata">
                                <table  cellpadding="0" cellspacing="0" border="0"
                                        style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;vertical-align: top;height: 320px;">
                                    <tr>
                                        <td style="padding: 0;vertical-align: top;">
                                            <table class="head" style="width: 600px; min-height: 90px;border-spacing: 0;vertical-align:middle">
                                                <tr>
                                                    <td style="padding: 40px 20px 0 20px;vertical-align: top;width:50%;">
                                                        <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                                                    </td>
                                                    <td style="padding: 40px 20px 0 20px;vertical-align: top;width:50%;color: #01bbea" align="right">
                                                        <a @click.prevent :href="metadata.title2.href.changed != null ? metadata.title2.href.changed : metadata.title2.href.default" target="_blank"
                                                            style="word-break: break-word;text-decoration:none;text-align: right;font-family: sans-serif;font-size: 36px;font-weight: 300;background: #fff"
                                                           :style="{color : metadata.accentColor}">
                                                            {{metadata.title2.changed != null ? metadata.title2.changed : metadata.title2.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </block-component>
                        </td>
                    </tr>
                </table>
    
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                    <tr>
                        <td style="position:relative;padding:0">
                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:600px;background: #fff;">
                                    <tr>
                                        <td style="padding: 0 20px">
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;display: table;margin-top: -40px;">
                                                <tr>
                                                    <td style="padding:0;display:block;position: relative;z-index: 2;background: #ffffff;">
                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                            <tr>
                                                                <td style="padding: 20px;">
                                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                                        <tr>
                                                                            <td style="padding:0">
                                                                                <img-img :img="metadata.photo1" :imgwidth="160"></img-img>
                                                                            </td>
                                                                            <td style="padding:0 20px">
                                                                                <img-img :img="metadata.photo2" :imgwidth="160"></img-img>
                                                                            </td>
                                                                            <td style="padding:0">
                                                                                <img-img :img="metadata.photo3" :imgwidth="160"></img-img>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
    
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:100%">
                                                <tr>
                                                    <td style="padding: 15px 0 20px;">
                                                        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%">
                                                            <tr>
                                                                <td style="color: #01bbea;padding: 0 0 10px 0" align="center">
                                                                    <a @click.prevent :href="metadata.title3.href.changed != null ? metadata.title3.href.changed : metadata.title3.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;text-align:center;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                       :style="{color : metadata.accentColor}">
    
                                                                        {{metadata.title3.changed != null ? metadata.title3.changed : metadata.title3.default}}
    
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="padding: 0 0 20px 0" align="center">
                                                                    <span style="word-break: break-word;display: block;text-align: center;font-size: 14px;font-weight: 400;font-family: sans-serif;line-height: 20px;">
                                                                        {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
    
                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:560px">
                                                            <tr>
                                                                <td style="padding: 0 0 10px 0" align="center">
                                                                    <a @click.prevent :href="metadata.title4.href.changed != null ? metadata.title4.href.changed : metadata.title4.href.default" target="_blank"
                                                                        style="word-break: break-word;text-decoration:none;font-size: 20px;font-weight: 700;font-family: sans-serif;display: block;text-align: center;text-transform: uppercase;"
                                                                       :style="{color : metadata.accentColor}">
                                                                        {{metadata.title4.changed != null ? metadata.title4.changed : metadata.title4.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
    
                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:560px">
                                                            <tr>
                                                                <td style="padding:0;width:50%;vertical-align: top;">
                                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;padding: 15px 0 0;margin:0;vertical-align:top;text-align:left;position:relative;width:100%">
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item1.href.changed != null ? metadata.listItem.item1.href.changed : metadata.listItem.item1.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item1.changed != null ? metadata.listItem.item1.changed : metadata.listItem.item1.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item2.href.changed != null ? metadata.listItem.item2.href.changed : metadata.listItem.item2.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item2.changed != null ? metadata.listItem.item2.changed : metadata.listItem.item2.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item3.href.changed != null ? metadata.listItem.item3.href.changed : metadata.listItem.item3.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item3.changed != null ? metadata.listItem.item3.changed : metadata.listItem.item3.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td style="padding:0;width:50%;vertical-align: top;">
                                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;padding: 15px 0 0;margin:0;vertical-align:top;text-align:left;position:relative;width:100%">
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item4.href.changed != null ? metadata.listItem.item4.href.changed : metadata.listItem.item4.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item4.changed != null ? metadata.listItem.item4.changed : metadata.listItem.item4.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item5.href.changed != null ? metadata.listItem.item5.href.changed : metadata.listItem.item5.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item5.changed != null ? metadata.listItem.item5.changed : metadata.listItem.item5.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="padding: 0 0 10px 0">
                                                                                <table>
                                                                                    <tr>
                                                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                                                  :style="{background: metadata.accentColor}">
                                                                                                <img src="/img/checked.png"
                                                                                                     width="14px" alt=""
                                                                                                     style="display: inline-block;vertical-align: top;">
                                                                                            </span>
                                                                                        </td>
                                                                                        <td style="padding:0">
                                                                                            <a @click.prevent :href="metadata.listItem.item6.href.changed != null ? metadata.listItem.item6.href.changed : metadata.listItem.item6.href.default" target="_blank" 
                                                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                                                {{metadata.listItem.item6.changed != null ? metadata.listItem.item6.changed : metadata.listItem.item6.default}}
                                                                                            </a>
                                                                                        </td>
                                                                                    </tr>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table style="width: 100%;" :style="{display : address}">
                                                <tr>
                                                    <td style="padding: 0;" align="center">
                                                        <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                              :style="{color : metadata.accentColor}">Address</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 0 20px 0;" align="center">
                                                        <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                                           style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                                           :style="{color : metadata.accentColor}">
                                                            {{metadata.brokerage_address}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                            <table :style="{display : links}" style="width: 100%;">

                                                <tr>
                                                    <!-- link title -->
                                                    <td style="padding: 0;width: 100%;">
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td style="padding: 0;width: 100%;" align="center">
                                                                    <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                          :style="{color : metadata.accentColor}">
                                                                        Links
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <!-- links -->
                                                    <td style="padding: 0;width: 100%;">
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td :style="{display: link1}"
                                                                    style="padding: 0;width: 50%;" align="center">
                                                                    <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                                       :style="{color : metadata.accentColor}">{{metadata.link1.title}}</a>
                                                                </td>
                                                                <td :style="{display: link2}"
                                                                    style="padding: 0;width: 50%;" align="center">
                                                                    <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                                       :style="{color : metadata.accentColor}">{{metadata.link2.title}}</a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>


                                            </table>

                                            <table>
                                                <tr>
                                                    <td style="padding: 0 0 80px 0;"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                        </td>
                    </tr>
                </table>
    
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;position: relative;background: #111;">
                    <tr>
                        <td style="padding: 30px 20px 30px 20px;">
                            <table cellpadding="0" cellspacing="0" border="0"
                                   style="border-collapse: collapse;border-spacing:0;border: 0px; width:560px;position: relative;background: #111111">
                                <tr>
                                    <td style="padding: 0 0 20px 0">
                                        <table cellpadding="0" cellspacing="0" border="0"
                                               style="border-collapse: collapse;border-spacing:0;border: 0px;width: 560px;">
                                            <tr>
                                                <td style="display:block;padding:0;margin-top: -90px;vertical-align: middle;position:relative;z-index:2">
                                                    <table cellpadding="0" cellspacing="0" border="0"
                                                           style="border-collapse: collapse;border-spacing:0;border: 0px;width:560px;" :style="{background : metadata.accentColor}">
                                                        <tr>
                                                            <td style="padding:25px 0" align="center">
                                                                <table cellpadding="0" cellspacing="0" border="0"
                                                                       style="border-collapse: collapse;border-spacing:0">

                                                                    <tr>
                                                                        <td style="padding:0;width:140px;"
                                                                            align="center">
                                                                            <img-img :img="metadata.propimg1"
                                                                                     :imgwidth="50"></img-img>

                                                                            <table cellpadding="0" cellspacing="0"
                                                                                   border="0"
                                                                                   style="border-collapse: collapse;border-spacing:0">
                                                                                <tr>
                                                                                    <td style="padding:8px 0 0 0"
                                                                                        align="center">
                                                                                        <a @click.prevent
                                                                                           :href="metadata.subtext1.href.changed != null ? metadata.subtext1.href.changed : metadata.subtext1.href.default"
                                                                                           target="_blank"
                                                                                           style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                                            {{metadata.subtext1.changed
                                                                                            != null ?
                                                                                            metadata.subtext1.changed :
                                                                                            metadata.subtext1.default}}
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>

                                                                        <td style="padding:0;width:140px;"
                                                                            align="center">
                                                                            <img-img :img="metadata.propimg2"
                                                                                     :imgwidth="50"></img-img>

                                                                            <table cellpadding="0" cellspacing="0"
                                                                                   border="0"
                                                                                   style="border-collapse: collapse;border-spacing:0">
                                                                                <tr>
                                                                                    <td style="padding:8px 0 0 0"
                                                                                        align="center">
                                                                                        <a @click.prevent
                                                                                           :href="metadata.subtext2.href.changed != null ? metadata.subtext2.href.changed : metadata.subtext1.href.default"
                                                                                           target="_blank"
                                                                                           style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                                            {{metadata.subtext2.changed
                                                                                            != null ?
                                                                                            metadata.subtext2.changed :
                                                                                            metadata.subtext2.default}}
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>

                                                                        <td style="padding:0;width:140px;"
                                                                            align="center">
                                                                            <img-img :img="metadata.propimg3"
                                                                                     :imgwidth="50"></img-img>

                                                                            <table cellpadding="0" cellspacing="0"
                                                                                   border="0"
                                                                                   style="border-collapse: collapse;border-spacing:0">
                                                                                <tr>
                                                                                    <td style="padding:8px 0 0 0"
                                                                                        align="center">
                                                                                        <a @click.prevent
                                                                                           :href="metadata.subtext3.href.changed != null ? metadata.subtext3.href.changed : metadata.subtext1.href.default"
                                                                                           target="_blank"
                                                                                           style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                                            {{metadata.subtext3.changed
                                                                                            != null ?
                                                                                            metadata.subtext3.changed :
                                                                                            metadata.subtext3.default}}
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>

                                                                        <td style="padding:0;width:140px;"
                                                                            align="center">
                                                                            <img-img :img="metadata.propimg4"
                                                                                     :imgwidth="50"></img-img>

                                                                            <table cellpadding="0" cellspacing="0"
                                                                                   border="0"
                                                                                   style="border-collapse: collapse;border-spacing:0">
                                                                                <tr>
                                                                                    <td style="padding:8px 0 0 0"
                                                                                        align="center">
                                                                                        <a @click.prevent
                                                                                           :href="metadata.subtext4.href.changed != null ? metadata.subtext4.href.changed : metadata.subtext1.href.default"
                                                                                           target="_blank"
                                                                                           style="word-break: break-word;text-decoration:none;display: block;text-align: center;color: #fff;font-family: sans-serif;font-size: 14px;">
                                                                                            {{metadata.subtext4.changed
                                                                                            != null ?
                                                                                            metadata.subtext4.changed :
                                                                                            metadata.subtext4.default}}
                                                                                        </a>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width:100%;vertical-align: middle;">
                                        <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                            <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref" :imgwidth="100"></userphoto-component>
                                            
                                        </td>
                                        <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                <tr>
                                                    <td style="padding:0">
                                                        <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#fff;">
                                                            OFFERED BY
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a
                                                                style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                                                :style="{color : metadata.accentColor}">
                                                            {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a
                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                            {{adding_info.designations}}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a :href="`tel:${adding_info.phone}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                            {{adding_info.phone}}
                                                        </a>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a :href="`mailto:${adding_info.email}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                            {{adding_info.email}}
                                                        </a>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                                           style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                            {{metadata.company_address}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                                
                                        </td>
                                        <td style="padding: 0;vertical-align: middle;">
                                            <table  cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0" align="right">
                                                <tr>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                                        <a :href="adding_info.facebook">
                                                            <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                                        <a :href="adding_info.twitter">
                                                            <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                                        <a :href="adding_info.linkedin">
                                                            <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
</table>

<table v-if="templateid == 3 ? showFunc3 : seen3=false" ref="template3" class="temp3" cellpadding="0" cellspacing="0" border="0" 
        style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;margin: 50px auto 0;display: table">
        <tr>
            <td style="padding: 0 15px">
                <table cellpadding="0" cellspacing="0" border="0"
                       style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;background: #fff">
                    <tr>
                        <td style="padding: 0 20px">
    
                    <table cellpadding="0" cellspacing="0" border="0"
                            style="border-collapse: collapse;border-spacing:0;border:0;width: 560px;border-spacing: 0;">
                        <tr>
                            <td style="padding: 20px" align="center">
                                <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                            </td>
                        </tr>
                    </table>
    
                    <table cellpadding="0" cellspacing="0" border="0"
                            style="border-collapse: collapse;border-spacing:0;border:0;border-spacing: 0;">
                        <tr>
                            <td style="padding: 0">
                                <img-img :img="metadata.img" :imgwidth="560"></img-img>
                            </td>
                        </tr>
                    </table>
    
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                        <tr>
                            <td style="padding:0;">
                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                    <tr>
                                        <td style="padding: 10px 0;">
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                <tr>
                                                    <td style="padding:0">
                                                        <img-img :img="metadata.photo1" :imgwidth="180"></img-img>
                                                    </td>
                                                    <td style="padding:0 10px">
                                                        <img-img :img="metadata.photo2" :imgwidth="180"></img-img>
                                                    </td>
                                                    <td style="padding:0">
                                                        <img-img :img="metadata.photo3" :imgwidth="180"></img-img>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
    
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                        <tr>
                            <td style="padding: 0">
                                <table cellpadding="0" cellspacing="0" border="0"
                                       style="border-collapse:collapse;border-spacing:0;border:0;background: rgb(226, 232, 234);">
                                    <tr>
                                        <td style="padding: 15px 10px">
                                            <table cellpadding="0" cellspacing="0" border="0"
                                                   style="border-collapse:collapse;border-spacing:0;border:0;width:540px">
                                                <tr>
                                                    <td style="padding: 0" align="center">
                                                        <a @click.prevent
                                                           :href="metadata.title2.href.changed != null ? metadata.title2.href.changed : metadata.title2.href.default"
                                                           target="_blank"
                                                           style="word-break: break-word;text-decoration:none;font-family: sans-serif;font-weight: 700;font-size: 36px;display:block;text-align:center"
                                                            :style="{color: metadata.accentColor}">
                                                            {{metadata.title2.changed != null ? metadata.title2.changed
                                                            : metadata.title2.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
    
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                        <tr>
                            <td style="padding: 30px 20px">
                                <table>
                                    <tr>
                                        <td style="padding:0 10px 0 0;width:250px;vertical-align: top;">
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <a @click.prevent :href="metadata.title3.href.changed != null ? metadata.title3.href.changed : metadata.title3.href.default" target="_blank"
                                                            style="word-break: break-word;text-decoration:none;display: block;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900;"
                                                           :style="{color: metadata.accentColor}">
                                                            {{metadata.title3.changed != null ? metadata.title3.changed : metadata.title3.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
    
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                <tr>
                                                    <td style="padding: 0">
                                                        <span 
                                                            style="word-break: break-word;text-decoration:none;color: #333;font-size: 14px;font-family:sans-serif;line-height: 20px;">
                                                            {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td style="padding:0 10px 0 0;width:250px;vertical-align: top;">
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <a @click.prevent :href="metadata.title4.href.changed != null ? metadata.title4.href.changed : metadata.title4.href.default" target="_blank"
                                                            style="word-break: break-word;text-decoration:none;display: block;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900;"
                                                           :style="{color: metadata.accentColor}">
                                                            {{metadata.title4.changed != null ? metadata.title4.changed : metadata.title4.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
    
                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;">
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <table>
                                                            <tr>
                                                                <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                    <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                          :style="{background: metadata.accentColor}">
                                                                        <img src="/img/checked.png"
                                                                             width="14px" alt=""
                                                                             style="display: inline-block;vertical-align: top;">
                                                                    </span>
                                                                </td>
                                                                <td style="padding:0">
                                                                    <a @click.prevent :href="metadata.listItem.item1.href.changed != null ? metadata.listItem.item1.href.changed : metadata.listItem.item1.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                        {{metadata.listItem.item1.changed != null ? metadata.listItem.item1.changed : metadata.listItem.item1.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <table>
                                                            <tr>
                                                                <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                    <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                          :style="{background: metadata.accentColor}">
                                                                        <img src="/img/checked.png"
                                                                             width="14px" alt=""
                                                                             style="display: inline-block;vertical-align: top;">
                                                                    </span>
                                                                </td>
                                                                <td style="padding:0">
                                                                    <a @click.prevent :href="metadata.listItem.item2.href.changed != null ? metadata.listItem.item2.href.changed : metadata.listItem.item2.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                        {{metadata.listItem.item2.changed != null ? metadata.listItem.item2.changed : metadata.listItem.item2.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <table>
                                                            <tr>
                                                                <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                    <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                          :style="{background: metadata.accentColor}">
                                                                        <img src="/img/checked.png"
                                                                             width="14px" alt=""
                                                                             style="display: inline-block;vertical-align: top;">
                                                                    </span>
                                                                </td>
                                                                <td style="padding:0">
                                                                    <a @click.prevent :href="metadata.listItem.item3.href.changed != null ? metadata.listItem.item3.href.changed : metadata.listItem.item3.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                        {{metadata.listItem.item3.changed != null ? metadata.listItem.item3.changed : metadata.listItem.item3.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <table>
                                                            <tr>
                                                                <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                    <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                          :style="{background: metadata.accentColor}">
                                                                        <img src="/img/checked.png"
                                                                             width="14px" alt=""
                                                                             style="display: inline-block;vertical-align: top;">
                                                                    </span>
                                                                </td>
                                                                <td style="padding:0">
                                                                    <a @click.prevent :href="metadata.listItem.item4.href.changed != null ? metadata.listItem.item4.href.changed : metadata.listItem.item4.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                        {{metadata.listItem.item4.changed != null ? metadata.listItem.item4.changed : metadata.listItem.item4.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 0 10px 0">
                                                        <table>
                                                            <tr>
                                                                <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                    <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                          :style="{background: metadata.accentColor}">
                                                                        <img src="/img/checked.png"
                                                                             width="14px" alt=""
                                                                             style="display: inline-block;vertical-align: top;">
                                                                    </span>
                                                                </td>
                                                                <td style="padding:0">
                                                                    <a @click.prevent :href="metadata.listItem.item5.href.changed != null ? metadata.listItem.item5.href.changed : metadata.listItem.item5.href.default" target="_blank" 
                                                                        style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                        {{metadata.listItem.item5.changed != null ? metadata.listItem.item5.changed : metadata.listItem.item5.default}}
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>

                                <table style="width: 100%;" :style="{display : address}">
                                    <tr>
                                        <td style="padding: 0;" align="center">
                                            <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                  :style="{color : metadata.accentColor}">Address</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0 0 20px 0;" align="center">
                                            <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                               style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                               :style="{color : metadata.accentColor}">
                                                {{metadata.brokerage_address}}
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                                <table :style="{display : links}" style="width: 100%">

                                    <tr>
                                        <!-- link title -->
                                        <td style="padding: 0;width: 100%;">
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="padding: 0;width: 100%;" align="center">
                                                        <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                              :style="{color : metadata.accentColor}">
                                                            Links
                                                        </span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <!-- links -->
                                        <td style="padding: 0;width: 100%;">
                                            <table style="width: 100%">
                                                <tr>
                                                    <td :style="{display: link1}" style="padding: 0;width: 50%;" align="center">
                                                        <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                           :style="{color : metadata.accentColor}">{{metadata.link1.title}}</a>
                                                    </td>
                                                    <td :style="{display: link2}" style="padding: 0;width: 50%;" align="center">
                                                        <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                           :style="{color : metadata.accentColor}">{{metadata.link2.title}}</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>


                                </table>
                            </td>
                        </tr>
                    </table>
                        </td>
                    </tr>
                </table>
    
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;">
                    <tr>
                        <td style="padding:0;height: 20px;display:block"></td>
                    </tr>
                </table>
    
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;position: relative;background: #fff">
                    <tr>
                        <td style="padding: 30px 20px;">
                            <table cellpadding="0" cellspacing="0" border="0"
                                   style="border-collapse: collapse;border-spacing:0;width:100%;vertical-align: middle;">
                                <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                    <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref"
                                                         :imgwidth="100"></userphoto-component>

                                </td>
                                <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                        <tr>
                                            <td style="padding:0">
                                                <a style="text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#333;">
                                                    OFFERED BY
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                                        :style="{color : metadata.accentColor}">
                                                    {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                    {{adding_info.designations}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`tel:${adding_info.phone}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                    {{adding_info.phone}}
                                                </a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`mailto:${adding_info.email}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                    {{adding_info.email}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                                   style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                    {{metadata.company_address}}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                                <td style="padding: 0;vertical-align: middle;">
                                    <table cellpadding="0" cellspacing="0" border="0"
                                           style="border-collapse: collapse;border-spacing:0" align="right">
                                        <tr>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                                <a :href="adding_info.facebook">
                                                    <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                                <a :href="adding_info.twitter">
                                                    <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                                <a :href="adding_info.linkedin">
                                                    <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
</table>

<table v-if="templateid == 4 ? showFunc4 : seen4=false" ref="template4" class="temp4" cellpadding="0" cellspacing="0" border="0"
        style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;margin: 50px auto 0;display: table">
        <tr>
            <td style="padding:0 15px">
                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width: 600px;margin: 0 auto;border:0;background: #fff">
                        <table class="head" style="width: 600px; min-height: 90px;border-spacing: 0;vertical-align:middle">
                            <tr>
                                <td style="padding: 0 20px;width:50%">
                                    <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                                </td>
                                <td style="padding: 0 20px;width:50%" align="right">
                                    <a @click.prevent :href="metadata.title2.href.changed != null ? metadata.title2.href.changed : metadata.title2.href.default" target="_blank"
                                        style="word-break: break-word;text-decoration:none;text-align: right;font-family: sans-serif;font-size: 36px;font-weight: 300;"
                                       :style="{color: metadata.accentColor}">
                                        {{metadata.title2.changed != null ? metadata.title2.changed : metadata.title2.default}}
                                    </a>
                                </td>
                            </tr>
                        </table>

                    <img-img :img="metadata.img" :imgwidth="600"></img-img>

                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width: 600px;border:0">
                            <tr>
                                <td style="padding:35px 20px;">

                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width:560px">
                                <tr>
                                    <td style="padding: 0 0 15px 0" align="center">
                                        <a @click.prevent :href="metadata.title3.href.changed != null ? metadata.title3.href.changed : metadata.title3.href.default" target="_blank"
                                            style="word-break: break-word;text-decoration:none;text-align:center;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                           :style="{color: metadata.accentColor}">
                                            {{metadata.title3.changed != null ? metadata.title3.changed : metadata.title3.default}}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0">
                                <tr>
                                    <td style="padding: 0 0 20px 0" align="center">
                                        <span style="word-break: break-word;display:block;text-align:center;color: #333;font-size: 14px;font-family: sans-serif;line-height: 20px;font-weight: 400;padding: 0;">
                                            {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}
                                        </span>
                                    </td>
                                </tr>
                            </table>

                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0">
                                <tr>
                                    <td style="padding: 0 0 35px 0">
                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0">
                                            <tr>
                                                <td style="padding: 0 10px 0 0">
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0; width: 275px">
                                                        <tr>
                                                            <td style="padding: 0">

                                                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                    <tr>
                                                                        <td style="padding: 0 0 11px 0">
                                                                            <img-img :img="metadata.temp4photo1" :imgwidth="275"></img-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                    <tr>
                                                                        <td style="padding: 0 11px 0 0;">
                                                                            <img-img :img="metadata.temp4photo2" :imgwidth="132"></img-img>
                                                                        </td>
                                                                        <td style="padding: 0;">
                                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                                <tr>
                                                                                    <td style="height:132px;width:132px;vertical-align:center;"
                                                                                        align="center"
                                                                                        :style="{background: metadata.accentColor}">
                                                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                                            <tr>
                                                                                                <td style="padding: 0 0 8px 0" align="center">
                                                                                                    <img-img :img="metadata.propimg4" :imgwidth="50"></img-img>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="padding:0" align="center">
                                                                                                    <a @click.prevent :href="metadata.subtext4.href.changed != null ? metadata.subtext4.href.changed : metadata.subtext4.href.default" target="_blank"
                                                                                                        style="word-break: break-word;text-decoration:none;color: #fff; font-family: sans-serif;font-weight: 400;font-size: 14px;line-height:20px;display:block;text-align:center">
                                                                                                        {{metadata.subtext4.changed != null ? metadata.subtext4.changed : metadata.subtext4.default}}
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>

                                                <td style="padding: 0">
                                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 275px">
                                                        <tr>
                                                            <td style="padding: 0">
                                                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                    <tr>
                                                                        <td style="padding: 0 11px 0 0;">
                                                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                                <tr>
                                                                                    <td style="background:#01bbea;height:132px;width:132px;vertical-align:center;"
                                                                                        align="center"
                                                                                        :style="{background: metadata.accentColor}">
                                                                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                                            <tr>
                                                                                                <td style="padding: 0 0 8px 0" align="center">
                                                                                                    <img-img :img="metadata.propimg1" :imgwidth="50"></img-img>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="padding:0" align="center">
                                                                                                    <a @click.prevent :href="metadata.subtext1.href.changed != null ? metadata.subtext1.href.changed : metadata.subtext1.href.default" target="_blank"
                                                                                                        style="word-break: break-word;text-decoration:none;color: #fff; font-family: sans-serif;font-weight: 400;font-size: 14px;line-height:20px;display:block;text-align:center">
                                                                                                        {{metadata.subtext1.changed != null ? metadata.subtext1.changed : metadata.subtext1.default}}
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td style="padding: 0;">
                                                                            <img-img :img="metadata.temp4photo3" :imgwidth="132"></img-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>

                                                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                                                                    <tr>
                                                                        <td style="padding: 11px 0 0px 0">
                                                                            <img-img :img="metadata.temp4photo4" :imgwidth="275"></img-img>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:560px">
                                <tr>
                                    <td style="padding: 0 0 10px 0" align="center">
                                        <a @click.prevent :href="metadata.title4.href.changed != null ? metadata.title4.href.changed : metadata.title4.href.default" target="_blank"
                                            style="word-break: break-word;text-decoration:none;font-size: 20px;font-weight: 700;font-family: sans-serif;display: block;text-align: center;text-transform: uppercase;"
                                            :style="{color: metadata.accentColor}">
                                            {{metadata.title4.changed != null ? metadata.title4.changed : metadata.title4.default}}
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;border:0;width:560px">
                                <tr>
                                    <td style="padding:0;width:50%;vertical-align: top;">
                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;padding: 15px 0 0;margin:0;vertical-align:top;text-align:left;position:relative;width:100%">
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item1.href.changed != null ? metadata.listItem.item1.href.changed : metadata.listItem.item1.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item1.changed != null ? metadata.listItem.item1.changed : metadata.listItem.item1.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item2.href.changed != null ? metadata.listItem.item2.href.changed : metadata.listItem.item2.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item2.changed != null ? metadata.listItem.item2.changed : metadata.listItem.item2.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item3.href.changed != null ? metadata.listItem.item3.href.changed : metadata.listItem.item3.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item3.changed != null ? metadata.listItem.item3.changed : metadata.listItem.item3.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td style="padding:0;width:50%;vertical-align: top;">
                                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;padding: 15px 0 0;margin:0;vertical-align:top;text-align:left;position:relative;width:100%">
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item4.href.changed != null ? metadata.listItem.item4.href.changed : metadata.listItem.item4.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item4.changed != null ? metadata.listItem.item4.changed : metadata.listItem.item4.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item5.href.changed != null ? metadata.listItem.item5.href.changed : metadata.listItem.item5.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item5.changed != null ? metadata.listItem.item5.changed : metadata.listItem.item5.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 0 10px 0">
                                                    <table>
                                                        <tr>
                                                            <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                            </td>
                                                            <td style="padding:0">
                                                                <a @click.prevent :href="metadata.listItem.item6.href.changed != null ? metadata.listItem.item6.href.changed : metadata.listItem.item6.href.default" target="_blank"
                                                                    style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                    {{metadata.listItem.item6.changed != null ? metadata.listItem.item6.changed : metadata.listItem.item6.default}}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>


                                    <table style="width: 100%;" :style="{display : address}">
                                        <tr>
                                            <td style="padding: 0;" align="center">
                                                        <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                              :style="{color : metadata.accentColor}">Address</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 20px 0;" align="center">
                                                <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                                   style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                                   :style="{color : metadata.accentColor}">
                                                    {{metadata.brokerage_address}}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>

                                    <table :style="{display : links}" style="width: 100%" >

                                        <tr>
                                            <!-- link title -->
                                            <td style="padding: 0;width: 100%;">
                                                <table style="width: 100%">
                                                    <tr>
                                                        <td style="padding: 0;width: 100%;" align="center">
                                                            <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                  :style="{color : metadata.accentColor}">
                                                                Links
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <!-- links -->
                                            <td style="padding: 0;width: 100%;">
                                                <table style="width: 100%">
                                                    <tr>
                                                        <td :style="{display: link1}" style="padding: 0;width: 50%;" align="center">
                                                            <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                   :style="{color : metadata.accentColor}">{{metadata.link1.title}}</a>
                                                        </td>
                                                        <td :style="{display: link2}" style="padding: 0;width: 50%;" align="center">
                                                            <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                                   :style="{color : metadata.accentColor}">{{metadata.link2.title}}</a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                    </table>

                                </td>
                            </tr>

                        </table>

                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;position: relative;background: #111">
                    <tbody>
                        <td style="padding: 30px 20px;">
                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;width:100%;vertical-align: middle;">
                                <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                    <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref" :imgwidth="100"></userphoto-component>

                                </td>
                                <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#fff;">
                                                    {{metadata.userOffered.changed != null ? metadata.userOffered.changed : metadata.userOffered.default}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                                        :style="{color : metadata.accentColor}">
                                                    {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.designations}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`tel:${adding_info.phone}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.phone}}
                                                </a>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`mailto:${adding_info.email}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{adding_info.email}}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding:0">
                                                <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                                   style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#fff;">
                                                    {{metadata.company_address}}

                                                </a>
                                            </td>
                                        </tr>
                                    </table>

                                </td>
                                <td style="padding: 0;vertical-align: middle;">
                                    <table  cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0" align="right">
                                        <tr>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                                <a :href="adding_info.facebook">
                                                    <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                                <a :href="adding_info.twitter">
                                                    <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                            <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                                <a :href="adding_info.linkedin">
                                                    <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </table>
                        </td>
                    </tbody>
                </table>

                </table>

            </td>
        </tr>
</table>

<table v-if="templateid == 5 ? showFunc5 : seen5=false" ref="template5" class="temp5" cellpadding="0" cellspacing="0" border="0"
       style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;margin: 50px auto 0;display: table">

    <tr>
        <td style="padding: 0 15px" align="center">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table">
                <tr>
                    <td style="padding: 0;">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                            <tr>
                                <td style="padding: 25px" align="center">
                                    <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                            <tr>
                                <td style="padding: 10px 20px 30px" align="left">
                                    <p style="font-size: 14px;font-family: sans-serif;color:#333;line-height: 20px;margin: 0;padding: 0;">
                                        {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}
                                    </p>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                            <tr>
                                <td style="padding: 0; width: 400px">
                                    <img-img :img="metadata.temp5photo1" :imgwidth="400"></img-img>
                                </td>
                                <td style="padding: 0; width: 200px;">
                                    <table>
                                        <tr>
                                            <td style="padding: 0;">
                                                <img-img :img="metadata.temp5photo2" :imgwidth="200"></img-img>
                                            </td>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <td style="padding: 0;">
                                                <img-img :img="metadata.temp5photo3" :imgwidth="200"></img-img>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                            <tr>
                                <td style="padding: 30px 20px;vertical-align: middle">
                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width:560px;border-spacing: 0;display: table;background: #fff">
                                        <tr>
                                            <td style="padding: 0;width: 50%;" align="left">
                                                <table style="background: #fff;" :style="{display : address}">
                                                    <tr>
                                                        <td style="padding: 0;" align="center">
                                                            <span style="text-decoration:none;font-family: sans-serif;font-size: 20px;text-transform: uppercase;font-weight: 900"
                                                                  :style="{color : metadata.accentColor}">
                                                                Address
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding: 0;" align="center">
                                                            <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                                               :style="{color : metadata.accentColor}">
                                                                {{metadata.brokerage_address}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                            <td style="padding: 0;width: 50%;" align="right">
                                                <span style="word-break: break-word;text-decoration:none;font-size: 40px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;"
                                                      :style="{color: metadata.accentColor}">
                                                    {{metadata.title2.changed != null ? metadata.title2.changed : metadata.title2.default}}
                                                </span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                        <table :style="{display : links}" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                            <tr>
                                <td style="padding: 15px 20px 35px;">
                                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 560px;border-spacing: 0;display: table;background: #fff">
                                        <tr>
                                            <td :style="{display: link1}"
                                                style="padding: 0;width: 33%;" align="center">
                                                <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                       :style="{color : metadata.accentColor}">
                                                    {{metadata.link1.title}}
                                                </a>
                                            </td>
                                            <td :style="{display: link2}"
                                                style="padding: 0;width: 33%;" align="center">
                                                <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                       :style="{color : metadata.accentColor}">
                                                    {{metadata.link2.title}}
                                                </a>
                                            </td>
                                            <td :style="{display: link3}"
                                                style="padding: 0;width: 33%;" align="center">
                                                <a :href="metadata.link3.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer"
                                       :style="{color : metadata.accentColor}">
                                                    {{metadata.link3.title}}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: none; width:600px;position: relative;background: #fff;display: table;">
                            <tr>
                                <td style="padding: 0 20px">
                                    <table style="width: 560px;height: 2px; background: #e2e8ea"></table>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 30px 20px;">
                                    <table cellpadding="0" cellspacing="0" border="0"
                                           style="border-collapse: collapse;border-spacing:0;width:560px;vertical-align: middle;">
                                        <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                            <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref"
                                                                 :imgwidth="100"></userphoto-component>

                                        </td>
                                        <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                                <tr>
                                                    <td style="padding:0">
                                                        <a style="text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#333;">
                                                            OFFERED BY
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                                           :style="{color : metadata.accentColor}">
                                                            {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                            {{adding_info.designations}}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a :href="`tel:${adding_info.phone}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                            {{adding_info.phone}}
                                                        </a>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding:0">
                                                        <a :href="`mailto:${adding_info.email}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                            {{adding_info.email}}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0;">
                                                        <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                                                style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                            {{metadata.company_address}}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>

                                        </td>
                                        <td style="padding: 0;vertical-align: middle;">
                                            <table cellpadding="0" cellspacing="0" border="0"
                                                   style="border-collapse: collapse;border-spacing:0" align="right">
                                                <tr>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                                        <a :href="adding_info.facebook">
                                                            <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                                        <a :href="adding_info.twitter">
                                                            <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                    <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                                        <a :href="adding_info.linkedin">
                                                            <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

</table>

<table v-if="templateid == 6" ref="template6" class="temp6" cellpadding="0" cellspacing="0" border="0"
       style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;margin: 50px auto 0;display: table">
    <tr>
        <td style="padding: 0 15px" align="center">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #fff">
                <tr>
                    <td style="padding: 28px 20px;">
                        <img v-bind:src="metadata.logo" alt="logo" width="190" style="width: 190px">
                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table; background: #fff;">
                <tr>
                    <td style="padding: 0;width: 400px;vertical-align: top;">
                        <img-img :img="metadata.temp6photo1" :imgwidth="400"></img-img>
                    </td>
                    <td style="padding: 0;width: 200px;vertical-align: top;">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 200px;border-spacing: 0;display: table;">
                            <tr>
                                <td style="padding: 0;">
                                    <img-img :img="metadata.temp6photo2" :imgwidth="200"></img-img>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 20px 2px;">
                                    <table>
                                        <tr>
                                            <td>
                                                <span style="font-family: Sans-Serif;font-weight: 100;font-size: 18px;" :style="{color: metadata.accentColor}">
                                                    {{metadata.title4.changed != null ? metadata.title4.changed : metadata.title4.default}}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 3px 0">
                                                <table>
                                                    <tr>
                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                                <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                      :style="{background: metadata.accentColor}">
                                                                    <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                                </span>
                                                        </td>
                                                        <td style="padding:0;line-height: 18px;">
                                                            <a @click.prevent :href="metadata.listItem.item1.href.changed != null ? metadata.listItem.item1.href.changed : metadata.listItem.item1.href.default" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                {{metadata.listItem.item1.changed != null ? metadata.listItem.item1.changed : metadata.listItem.item1.default}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 3px 0">
                                                <table>
                                                    <tr>
                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                  :style="{background: metadata.accentColor}">
                                                                <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                            </span>
                                                        </td>
                                                        <td style="padding:0;line-height: 18px;">
                                                            <a @click.prevent :href="metadata.listItem.item2.href.changed != null ? metadata.listItem.item2.href.changed : metadata.listItem.item2.href.default" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                {{metadata.listItem.item2.changed != null ? metadata.listItem.item2.changed : metadata.listItem.item2.default}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 3px 0">
                                                <table>
                                                    <tr>
                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                  :style="{background: metadata.accentColor}">
                                                                <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                            </span>
                                                        </td>
                                                        <td style="padding:0;line-height: 18px;">
                                                            <a @click.prevent :href="metadata.listItem.item3.href.changed != null ? metadata.listItem.item3.href.changed : metadata.listItem.item3.href.default" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                {{metadata.listItem.item3.changed != null ? metadata.listItem.item3.changed : metadata.listItem.item3.default}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 3px 0">
                                                <table>
                                                    <tr>
                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                  :style="{background: metadata.accentColor}">
                                                                <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                            </span>
                                                        </td>
                                                        <td style="padding:0;line-height: 18px;">
                                                            <a @click.prevent :href="metadata.listItem.item4.href.changed != null ? metadata.listItem.item4.href.changed : metadata.listItem.item4.href.default" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                {{metadata.listItem.item4.changed != null ? metadata.listItem.item4.changed : metadata.listItem.item4.default}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 3px 0">
                                                <table>
                                                    <tr>
                                                        <td style="padding: 1px 0;width: 21px;line-height: 19px;height: 20px;display: inline-block;">
                                                            <span style="height: 16px;width: 16px;display: block;border-radius: 3px;padding: 1px;"
                                                                  :style="{background: metadata.accentColor}">
                                                                <img src="/img/checked.png" width="14px" alt="" style="display: inline-block;vertical-align: top;">
                                                            </span>
                                                        </td>
                                                        <td style="padding:0;line-height: 18px;">
                                                            <a @click.prevent :href="metadata.listItem.item5.href.changed != null ? metadata.listItem.item5.href.changed : metadata.listItem.item5.href.default" target="_blank"
                                                               style="word-break: break-word;text-decoration:none;font-size: 14px;color: #333;font-family: sans-serif;font-weight:400;">
                                                                {{metadata.listItem.item5.changed != null ? metadata.listItem.item5.changed : metadata.listItem.item5.default}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #f2f7f9" bgcolor="#f2f7f9">
                <tr>
                    <td style="padding: 0;width: 200px;vertical-align: top;">
                        <img-img :img="metadata.temp6photo3" :imgwidth="200"></img-img>
                    </td>
                    <td style="padding: 35px 20px;vertical-align: middle;">
                        <p style="font-size: 14px;font-family: sans-serif;color:#333;line-height: 20px;margin: 0;padding: 0;">
                            {{metadata.text1.changed != null ? metadata.text1.changed : metadata.text1.default}}
                        </p>
                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 600px;border-spacing: 0;display: table;background: #f2f7f9" bgcolor="#f2f7f9">
                <tr>
                    <td style="padding: 0;width: 200px;vertical-align: top;">
                        <img-img :img="metadata.temp6photo4" :imgwidth="200"></img-img>
                    </td>
                    <td style="padding: 0 20px 25px;vertical-align: top;">
                        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;">
                            <tr>
                                <td style="padding-bottom: 15px;">
                                    <span style="font-size: 30px;font-family: sans-serif;line-height: 20px;margin: 0;padding: 0;" :style="{color: metadata.accentColor}">
                                        {{metadata.title2.changed != null ? metadata.title2.changed : metadata.title2.default}}
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <td style="padding: 0;">
                                    <table :style="{display : address}">
                                        <tr>
                                            <td style="padding: 0;">
                                                <span style="color:#999;font-size: 14px;font-family: Sans-Serif;font-weight: 700;">ADDRESS</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 0 0 40px 0;">
                                                <a :href="`https://www.google.com/maps/place/${metadata.brokerage_address}`" target="_blank"
                                                   style="word-break: break-word;text-decoration:none;font-size: 20px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;cursor: pointer !important"
                                                    :style="{color: metadata.accentColor}">
                                                    {{metadata.brokerage_address}}
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <table :style="{display : links}" cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 360px;border-spacing: 0;display: table;">
                                        <tr>
                                            <td style="padding: 0;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border:0;width: 360px;border-spacing: 0;display: table;">
                                                    <tr>
                                                        <td :style="{display: link1}"
                                                            style="padding: 0;width: 100px;display: inline-block;" align="left">
                                                            <a :href="metadata.link1.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 16px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#01bbea;">
                                                                {{metadata.link1.title}}
                                                            </a>
                                                        </td>
                                                        <td :style="{display: link2}"
                                                            style="padding: 0;width: 100px;display: inline-block;" align="left">
                                                            <a :href="metadata.link2.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 16px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#01bbea;">
                                                                {{metadata.link2.title}}
                                                            </a>
                                                        </td>
                                                        <td :style="{display: link3}"
                                                            style="padding: 0;width: 100px;display: inline-block;" align="left">
                                                            <a :href="metadata.link3.href" target="_blank" style="word-break: break-word;text-decoration:none;font-size: 16px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#01bbea;">
                                                                {{metadata.link3.title}}
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>


                    </td>
                </tr>
            </table>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;position: relative;background: #fff">
                <tr>
                    <td style="padding: 30px 20px;">
                        <table cellpadding="0" cellspacing="0" border="0"
                               style="border-collapse: collapse;border-spacing:0;width:100%;vertical-align: middle;">
                            <td style="padding: 0;display: inline-block;width: 100px;vertical-align: top;">

                                <userphoto-component :img="adding_info" :userphotoHref="metadata.userPhotoHref"
                                                     :imgwidth="100"></userphoto-component>

                            </td>
                            <td style="width: 350px;padding: 0 0 0 10px;display: inline-block;vertical-align: sub;">

                                <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0">
                                    <tr>
                                        <td style="padding:0">
                                            <a style="text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 700;line-height: 20px;color:#333;">
                                                OFFERED BY
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0">
                                            <a style="word-break: break-word;text-decoration:none;font-size: 18px;font-family: sans-serif;display: block;text-transform: uppercase;font-weight: 400;line-height: 25px;"
                                               :style="{color : metadata.accentColor}">
                                                {{metadata.name.changed != null ? metadata.name.changed : metadata.name.default}}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0">
                                            <a style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                {{adding_info.designations}}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0">
                                            <a :href="`tel:${adding_info.phone}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                {{adding_info.phone}}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0">
                                            <a :href="`mailto:${adding_info.email}`" style="cursor:pointer;word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                {{adding_info.email}}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0;">
                                            <a :href="`https://www.google.com/maps/place/${metadata.company_address}`" target="_blank"
                                               style="word-break: break-word;text-decoration:none;font-size: 14px;font-family: sans-serif;display: block;font-weight: 400;line-height: 20px;color:#333;">
                                                {{metadata.company_address}}
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                            </td>
                            <td style="padding: 0;vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0" border="0"
                                       style="border-collapse: collapse;border-spacing:0" align="right">
                                    <tr>
                                        <td style="padding: 0 0 0 3px" v-show="adding_info.facebook != null">
                                            <a :href="adding_info.facebook">
                                                <img src="/img/fbi.png" alt="facebook" width="30" style="display: inline-block;">
                                            </a>
                                        </td>
                                        <td style="padding: 0 0 0 3px" v-show="adding_info.twitter != null">
                                            <a :href="adding_info.twitter">
                                                <img src="/img/twi.png" alt="twitter" width="30" style="display: inline-block;">
                                            </a>
                                        </td>
                                        <td style="padding: 0 0 0 3px" v-show="adding_info.linkedin != null">
                                            <a :href="adding_info.linkedin">
                                                <img src="/img/ini.png" alt="ini" width="30" style="display: inline-block;">
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>

<div :class="{btnposition : leftSideBar}"  v-show="btnseen" class="temp_nav_btns showPricing">
    <button @click="showPricing">NEXT</button>
    <button :disabled="isStoring" id="save" @click.prevent="saveDraft(true)">Save Draft</button>
</div>



                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        </div>

            <!--<div class="show-price">-->
                <!--<i class="icon-price-tag" @click="showNextBtn"></i>-->
            <!--</div>-->

            <div class="right-sidebar" :class="{hide: isActive}">
                <i class="icon-close" @click="showNextBtn"></i>

                <pricing-component :pricings="pricings" :dispatch="dispatch"></pricing-component>

            </div>
    </main>
</template>

    
<script>

    import {location} from '../directives/location.js';
    import { EventBus } from './event-bus.js';

    export default {
        props: ['regions','templates', 'templateid','pricings', 'url','cityprice','stateprice','countryprice','credits','dispatch'],
        directives: {
            location
        },

        data() {
            return {
                toggleLeftSidebar : false,
                isShowSidebar : false,
                btnseen: true,
                toggleButton: false,
                leftSideBar: true,
                isActive : true,
                text: '',
                template: 1,
                seen1: false,
                seen2: false,
                seen3: false,
                seen4: false,
                seen5: false,
                selectedTemplate : {
                    html : '',
                    id : 0,
                    data : {},
                    adding_info : {},
                    banner : ''
                },
                metadata : {
                    linkCount : 0,
                    link1 : {
                        title : 'Link 1',
                        href : ''
                    },
                    link2 : {
                        title : 'Link 2',
                        href : ''
                    },
                    link3 : {
                        title : 'Link 3',
                        href : ''
                    },
                    accentColor : '#01bbea',
                    logo : '/img/email_logo.png',
                    bgimg: '/img/bigimg.jpg',
                    img : {
                        default : '/img/bigimg.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp5photo1:{
                        default : '/img/temp5_1.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp5photo2:{
                        default : '/img/temp5_2.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp5photo3:{
                        default : '/img/temp5_3.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp6photo1:{
                        default : '/img/temp6_1.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp6photo2:{
                        default : '/img/temp6_2.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp6photo3:{
                        default : '/img/temp6_3.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp6photo4:{
                        default : '/img/temp6_4.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    photo1 : {
                        default : '/img/smallimg.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    photo2 : {
                        default : '/img/smallimg2.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    photo3 : {
                        default : '/img/smallimg3.jpg',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp4photo1 : {
                        default : '/img/smallimg4.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp4photo2 : {
                        default : '/img/smallimg-4.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp4photo3 : {
                        default : '/img/img44.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    temp4photo4 : {
                        default : '/img/room.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    propimg1 : {
                        default : '/img/bed.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    propimg2 : {
                        default : '/img/bathtub.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    propimg3 : {
                        default : '/img/garage.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    propimg4 : {
                        default : '/img/home.png',
                        changed : null,
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    title : {
                        default : 'AGENCY LOGO',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    title2 : {
                        default : '$000.000',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    title3 : {
                        default : 'Main header',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    text1 : {
                        default : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lectus vitae metus semper egestas. Phasellus quis molestie justo. Pellentesque venenatis aliquet malesuada. Proin congue mi eget velit commodo, at scelerisque ipsum pulvinar.',
                        changed : null
                    },
                    title4 : {
                        default : 'SPECIFICATIONS',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    listItem : {
                        item1 : {
                            default : 'Single Family Bungalow',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                        item2 : {
                            default : '2800 Sq Ft',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                        item3 : {
                            default : '2 Floors',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                        item4 : {
                            default : '10 Total Rooms',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                        item5 : {
                            default : 'Great School',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                        item6 : {
                            default : '3 Neighbourhood Parks',
                            changed : null,
                            href    : {
                                default : null,
                                changed : ''
                            }
                        },
                    },
                    title5 : {
                        default : 'Property Features',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    subtext1 : {
                        default : '3 beds',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    subtext2 : {
                        default : '2 bath',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    subtext3 : {
                        default : '2 garage',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    subtext4 : {
                        default : '2800 sq ft',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    userPhotoHref : {
                        href : {
                            default : null,
                            changed : ''
                        }
                    },
                    name : {
                        default : this.$store.state.user.name,
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    email : {
                        default : this.$store.state.user.email,
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    // OFFERED BY
                    userOffered : {
                        default : 'OFFERED BY',
                        changed : null,
                        href    : {
                            default : null,
                            changed : ''
                        }
                    },
                    phoneHref : null,
                    designationHref : null,
                    addressHref : null,
                    emailHref : null,
                    brokerage_address : null,
                    company_address : this.$store.state.user.brokerage_address
                },
                adding_info : {
                    name : this.$store.state.user.name,
                    email : this.$store.state.user.email,
                    designations : this.$store.state.user.designations,
                    phone : this.$store.state.user.phone,
                    photo : this.$store.state.user.photo,
                    facebook : this.$store.state.user.facebook,
                    twitter : this.$store.state.user.twitter,
                    linkedin: this.$store.state.user.linkedin,
                    brokerage_address : this.$store.state.user.brokerage_address
                },
                formFields:{
                    country_code : '',
                    city: '',
                    location: '',
                },
                formFields2:{
                    country_code : '',
                    city: '',
                    location: '',
                },
                colorPickerVisibility : {
                    visible : false
                },
                postObject : {
                    regions : [],
                    html : '',
                    isDraft : false,
                    template_id : 0,
                    metadata : {},
                    adding_info : {},
                },
                isStoring: false,
                selectedRegions: []
            }
        },
        computed : {
            address() {
                if(this.metadata.brokerage_address != null){
                    return 'table'
                }
                return 'none'
            },
            links () {
                var arr = [this.metadata.link1.href, this.metadata.link2.href, this.metadata.link3.href]

                for(var i = 0; i < arr.length; i++){
                    if(arr[i] != '' && arr[i] != null){
                        return 'table'
                    }
                }
                return 'none'
            },
            link1(){

                if((this.metadata.link1.href != null) && (this.metadata.link1.href != '')){
                    return ''
                }
                else{
                    return 'none'
                }
            },
            link2(){

                if((this.metadata.link2.href != null) && (this.metadata.link2.href != '')){
                    return ''
                }
                else{
                    return 'none'
                }
            },
            link3(){

                if((this.metadata.link3.href != null) && (this.metadata.link3.href != '')){
                    return ''
                }
                else{
                    return 'none'
                }
            },
        },
        methods: {
            saveDraft(isDraft = false){

                if (this.isStoring || (!isDraft && !this.selectedRegions.length)) {
                    return;
                }

                var TemplateRef = `template${this.templateid}`.replace(/\s/g, '')

                let html = this.$refs[TemplateRef];
                let banner = `
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;width:100%">
                        <tr>
                            <td style="padding:0;height: 20px;display:block"></td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;margin: 0 auto;width: 600px;">
                        <tr>
                            <td style="padding:0">
                                <a href="${window.location.hostname}"><img src="/img/banner.jpg" alt="esendz"></a>
                            </td>
                        </tr>
                    </table>
                `

                this.postObject.regions = this.selectedRegions;
                this.postObject.adding_info = this.adding_info;
                this.postObject.metadata = this.metadata;
                this.postObject.isDraft = isDraft;
                this.postObject.template_id = this.templateid;
                this.postObject.html = html.outerHTML + banner;

                this.postObject.html = this.postObject.html.replace(/&quot;/g, `'`);

                if(!this.dispatch){
                    this.$store.dispatch('storeDispatch', this.postObject).then((response) => {

                        if (response && response.redirectUrl) {
                            window.location.replace(response.redirectUrl);
                        }

                        this.isStoring = false;

                    }).catch((error) => {

                        this.isStoring = false;
                    });
                }

                else{

                    this.postObject.id = this.dispatch.id

                    this.$store.dispatch('updateDispatch', this.postObject).then((response) => {

                        if (response && response.redirectUrl) {
                            window.location.replace(response.redirectUrl);
                        }

                        this.isStoring = false;

                    }).catch((error) => {

                        this.isStoring = false;
                    });
                }
            },
            colorPickerHide(){
                this.colorPickerVisibility.visible = false
            },
            onLocationChanged(data) {

                this.formFields.country_code = data.country_code;
                this.formFields.city = data.city;
                this.formFields.location = data.location;

                // this.location = data.location;
            },

            onLocationInputBlur(event) {

                setTimeout(() => {

                    if (this.location !== this.formFields.location) {

                        this.formFields.location = this.location;
                    }
                }, 50);
            },
            getAddress(value){
                let vm = this
                setTimeout(function () {
                    if(value == ''){
                        vm.metadata.brokerage_address = null
                    }
                }, 200)
            },
            getAddress2(value){
                let vm = this
                setTimeout(function () {
                    if(value == ''){
                        vm.metadata.company_address = null
                    }
                }, 200)
            },
            toggleLeftSideBar(){
                this.isShowSidebar = !this.isShowSidebar
                this.toggleLeftSidebar = !this.toggleLeftSidebar
            },
            showPricing(){
                this.isActive = false;
                this.btnseen = false;
                this.toggleLeftSideBar();
            },
            showNextBtn(){
                this.btnseen = true;
                this.isActive = true;
                this.toggleLeftSideBar();
            },
            showFunc1(){
                this.seen1 = true;
                this.seen2 = false;
                this.seen3 = false;
                this.seen4 = false;
                this.seen5 = false;
            },
            showFunc2(){
                this.seen1 = false;
                this.seen2 = true;
                this.seen3 = false;
                this.seen4 = false;
                this.seen5 = false;
            },
            showFunc3(){
                this.seen1 = false;
                this.seen2 = false;
                this.seen3 = true;
                this.seen4 = false;
                this.seen5 = false;
            },
            showFunc4(){
                this.seen1 = false;
                this.seen2 = false;
                this.seen3 = false;
                this.seen4 = true;
                this.seen5 = false;
            },
            showFunc5(){
                this.seen1 = false;
                this.seen2 = false;
                this.seen3 = false;
                this.seen4 = false;
                this.seen5 = true;
            },
            CloseSideBar(){
                if(this.isActive == true && this.leftSideBar == true){
                    this.leftSideBar = false
                }
                else{
                    this.leftSideBar = !this.leftSideBar
                }
            },
            OpenSideBar(){
                if(this.isActive == true && this.leftSideBar == false){
                    this.leftSideBar = true
                }
                else{
                    this.leftSideBar = !this.leftSideBar
                }
            },
        },
        mounted() {
            if(!this.dispatch || !this.dispatch.metadata){
                console.log(this.dispatch)
            }else{
                this.metadata = this.dispatch.metadata
                this.template_id = this.dispatch.template_id
                console.log(this.metadata)

            }
            // console.log(this.$store.state.user)
        },
        created () {
            EventBus.$on('getTemplate', flag => {
                this.selectedTemplate.id = this.templateid;

                var TemplateRef = `template${this.templateid}`.replace(/\s/g, '')
                
                this.selectedTemplate.html = this.$refs[TemplateRef];

                this.selectedTemplate.data = this.metadata;

                this.selectedTemplate.adding_info = this.adding_info;

                this.selectedTemplate.banner = `
                    <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px;width:100%">
                        <tr>
                            <td style="padding:0;height: 20px;display:block">
                            </td></tr></table><table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;border-spacing:0;border: 0px; width:600px;margin:0 auto; position: relative;">
                            <tr><td style="padding:0"><a href="${window.location.hostname}"><img src="/img/banner.jpg" alt="esendz"></a></td></tr></table>`

                EventBus.$emit('evPostTemplate', this.selectedTemplate);
                
            });
        }
    }
</script>


<style>
.showPricing{
    position: fixed;
    right: 50%;
    transform: translateX(500px);
    bottom: 50px;
    transition: 0.3s ease-in-out;
}
.showPricing button:first-child{
    background-color: #fb3e60;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    min-height: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    font-family: Montserrat,sans-serif;
    text-align: center;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}
.showPricing button:last-child{
    background-color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    min-height: 50px;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    font-family: Montserrat,sans-serif;
    text-align: center;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
}
    .popup-edit{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        background: #fff;
        width: 40%;
        padding: 35px 0 0 0;
        z-index: 4;
    }
    .icon-close{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        font-size: 20px;
        color: #999;
    }
    #label-file{background-image: url(/img/upload.svg);}
    #url-icon{background-image: url(/img/pencil.svg);}
    #href-icon{background-image: url(/img/link.svg) !important;-webkit-background-size: 60% !important; background-size: 60% !important; background-repeat: no-repeat !important; background-position: center !important;}

    #label-file{background-image: url(/img/edit_img.svg);}
    #url-icon{background-image: url(/img/pencil.svg);}
    #href-icon{background-image: url(/img/edit_link.svg) !important;-webkit-background-size: 60% !important; background-size: 60% !important; background-repeat: no-repeat !important; background-position: center !important;}
    #remove-icon{
        background-image: url(/img/paper-bucket.svg);
    }
    #text-icon{
        background-image: url(/img/pen.svg);
    }
    #palette{
        background-image: url(/img/paint-palette-and-brush.svg);
    }
#mceu_88{
    border: none !important;
}
.btnposition{
    transform: translateX(700px);
}
    .temp3 a,
    .temp1 a,
    .temp2 a,
    .temp4 a{
        cursor: default !important;
    }
    .temp_nav_btns{
        display: flex;
        align-items: center;
    }
    @media (min-width: 1271px) and (max-width: 1430px){
        .btnposition{
             transform: translateX(630px)
         }
    }
@media (min-width: 800px) and (max-width: 1270px){
    .showPricing{
        transform: translateX(390px);
        flex-direction: column;
    }
}
    @media (max-width: 799px){
        .showPricing{
            transform: none;
            flex-direction: column;
            right: 0;
            z-index: 22;
        }
    }
</style>