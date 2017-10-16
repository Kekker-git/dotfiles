Interfaces.BackgroundInterface=function(e){var n=e.TYPE_FUNCTION,t=e.TYPE_SYNC_FUNCTION,i=e.TYPE_STRING,o=e.TYPE_BOOLEAN,r=e.TYPE_OBJECT,a=e.TYPE_NUMBER,l=e.Definition;return{base_url:new l(i),FILENAME_FRAGMENT_BAD_CONTROL_CHARS:new l(i,{include:["vault","note"]}),FILENAME_FRAGMENT_BAD_SHELL_CHARS:new l(i,{include:["vault","note"]}),g_bigicons:new l(r,{include:["vault","vaultItemSelect"],sendIndirect:!1,write:!0}),g_icons:new l(r,{include:["vault","extensionDropdown","vaultItemSelect"]}),g_applications:new l(r,{include:["vault","extensionDropdown","application"]}),g_emer_sharees:new l(r,{include:"vault"}),g_emer_sharers:new l(r,{include:"vault"}),g_enterpriseuser:new l(a,{sync:!0}),g_enterprisemodel:new l(a,{sync:!0}),g_enterpriseuserrole:new l(i,{sync:!0}),g_formfills:new l(r,{include:["vault","extensionDropdown","formFill","chooseProfile","preferences"]}),g_genpws:new l(r,{include:["vault","extensionDropdown"],write:!0}),g_identities:new l(r,{include:["vault","extensionDropdown"]}),g_identity:new l(i,{include:["vault","extensionDropdown"],sync:!0}),g_iscompanyadmin:new l(o,{sync:!0}),g_local_accts_version:new l(i,{include:"vault",sync:!0}),g_local_key:new l(i),g_pendings:new l(r,{include:"vault"}),g_prefoverrides:new l(r),g_premium_exp:new l(r),g_is_legacy_premium:new l(a,{sync:!0}),g_prompts:new l(r),g_securenotes:new l(r,{include:["vault","extensionDropdown","note","vaultItemSelect"]}),g_shares:new l(r),g_showcredmon:new l(o,{include:"vault",sync:!0}),g_sites:new l(r,{include:["vault","extensionDropdown","site","note","formFill","contentScriptSite","contentScriptSiteBunk2"]}),g_pending_shares:new l(r,{include:["vault"]}),g_note_templates:new l(r,{include:["vault","note","addItem","extensionDropdown"]}),g_username:new l(i),g_username_hash:new l(i,{include:"vault"}),g_reminders:new l(r,{include:["vault"],write:!0}),g_one_minute_inbox_importer_dialog_enabled:new l(o,{include:"vault"}),g_one_minute_signup_enabled:new l(o,{include:"vault"}),g_one_minute_signup_menu_enabled:new l(o,{include:"vault"}),g_first_time_login:new l(o,{include:"vault"}),g_onemin_advert_enabled:new l(o,{include:"vault"}),g_new_settings_enabled:new l(o,{include:"vault"}),g_nofolder_feature_enabled:new l(r,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptSiteBunk2"]}),g_basicauth_feature_enabled:new l(r,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptSiteBunk2"]}),g_onemin_advert_app_threshold:new l(a,{include:"vault"}),g_blob_version:new l(a,{include:"vault"}),g_family_shared_folders_enabled:new l(o,{include:"vault"}),lp_attaches:new l(r,{include:["vault","note"]}),lploggedin:new l(o,{sync:!0}),lpversion:new l(i,{include:"vault"}),rsaprivatekeyhex:new l(i,{include:"vault",write:!0}),siteCats:new l(r,{include:["vault","site"]}),LPContentScriptFeatures:new l(r),g_bigsquareicons:new l(r,{include:["vault"]}),RecordTypeConfig:new l(r,{include:["vault","note","site","addItem","extensionDropdown"]}),addAttach:new l(n),addeditformfill:new l(n),addEmptyGroup:new l(n),LPServer:{ajax:new l(n),xmlRequest:new l(n),textRequest:new l(n),jsonRequest:new l(n)},BackgroundServer:{emergencyAccess:{acceptOffer:new l(n),addRecipient:new l(n),declineOffer:new l(n),denyAccess:new l(n),getRecipientInfo:new l(n),getSharerInfo:new l(n),removeRecipient:new l(n),requestAccess:new l(n),unlinkAccount:new l(n),updateRecipient:new l(n)},identities:{add:new l(n),remove:new l(n),update:new l(n)},vault:{history:{revertPasswordChange:new l(n),getPasswordHistory:new l(n),getUsernameHistory:new l(n),getNoteHistory:new l(n)}},sharing:{individual:{shareItems:new l(n),unshareItem:new l(n),acceptShare:new l(n),rejectShare:new l(n),inviteFriends:new l(n),getSentShareData:new l(n),getReceivedShareData:new l(n)},folder:{getFolders:new l(n),getPublicKeys:new l(n),create:new l(n),rename:new l(n),remove:new l(n),accept:new l(n),reject:new l(n),addMembers:new l(n),getMembers:new l(n),removeMember:new l(n),reinviteMember:new l(n),updateMemberPermissions:new l(n),getRestrictions:new l(n),updateRestrictions:new l(n),startDownloading:new l(n),stopDownloading:new l(n),restoreDeleted:new l(n),purgeDeleted:new l(n),convertToEnterprise:new l(n),convertToLegacy:new l(n)}},sitesAndNotes:{saveCustomNoteTemplate:new l(n),deleteCustomNoteTemplate:new l(n)},transact:{sendReminder:new l(n)},families:{optIn:new l(n),getMembers:new l(n),existingUserTrial:new l(n)}},changePassword:new l(n),deleteAid:new l(n),deleteformfill:new l(n),deleteGroup:new l(n),editAid:new l(n),fastEncryptAttachments:new l(n),generate_key:new l(n),get_securityChallengeScore:new l(n),gotourl:new l(n),launch:new l(n),launchApp:new l(n),loggedOut:new l(n),loglogin:new l(n),lpReportError:new l(n),make_lp_hash_iterations:new l(n),make_lp_key_hash:new l(n),make_lp_key_iterations:new l(n),moveIntoSharedFolder:new l(n),moveSelectedToGroup:new l(n),openAllSites:new l(n),openAttach:new l(n),openexport:new l(n),openentconsole:new l(n),openFamilyConsole:new l(n),openfavorites:new l(n),openimport:new l(n),openseccheck:new l(n),openURL:new l(n),processCS:new l(n),refreshGroupNames:new l(n),refreshsites:new l(n),renameGroup:new l(n),saveFields:new l(n),saveSite:new l(n),singlefactor_reprompt:new l(n),switch_identity:new l(n),unlock_plug2web:new l(n),exportAttachment:new l(n),install_binary:new l(n),VaultToggle:{toggleVault3_0:new l(n)},increment_local_accts_version:new l(n),AES:{bin2hex:new l(t),Decrypt:new l(t),Encrypt:new l(t),hex2bin:new l(t),hex2url:new l(t),url2hex:new l(t)},can_copy_to_clipboard:new l(t),canLaunchApplication:new l(t),check_filename_badchars:new l(t),crypto_btoa:new l(t),db_prepend:new l(t),dec:new l(t),enc:new l(t),enccbc:new l(t),encode_private_key:new l(t),encode_public_key:new l(t),fix_username:new l(t),get_last_reprompt_time:new l(t),get_mimetype_from_filename:new l(t),get_personal_linked:new l(t),get_random_password:new l(t),getbigicon:new l(t),geticonurlfromrecord:new l(t),gs:new l(t),have_binary:new l(t),isOffline:new l(t),localStorage_getItem:new l(t),localStorage_setItem:new l(t),lp_gettld_url:new l(t),lpCreatePass:new l(t),lpdec:new l(t),lpenc:new l(t),lpevent:new l(t),lpmdec:new l(t),lpmenc:new l(t),parse_public_key:new l(t),parse_private_key:new l(t),parsemobile:new l(t),punycode:{URLToASCII:new l(t)},RSAKey:new l(e.TYPE_CONSTRUCTOR),set_last_reprompt_time:new l(t),SHA256:new l(t),hostof:new l(t),StringUtils:{translate:new l(t)},Preferences:{get:new l(t),set:new l(t,{sendIndirect:!0})},PreferencesAsync:{get:new l(n),set:new l(n)},rsa_encrypt_privatekey:new l(t),sendLpImprove:new l(n),Provisioning:{provisioning:{checkUserState:new l(n,{include:"provisioning"}),sendApiCalls:new l(n,{include:"provisioning"}),getLocalKey:new l(n,{include:"provisioning"})}},ExtensionPreferences:{getConst:new l(n),getDefault:new l(n),read:new l(n),write:new l(n),getUnavailablePreferences:new l(n)},LPPlatform:{getUILanguage:new l(t)},get_method_async:new l(n),MigrationBackground:{getBlobVersion:new l(n),getLinkedUsername:new l(n),getLinkedBlobVersion:new l(n),subscribeToState:new l(n),subscribeToStateOnce:new l(n),wasMigration:new l(n),publishState:new l(n),saveBlobVersion:new l(n),saveLinkedBlobVersion:new l(n),sendSegmentEvent:new l(n)},FormfillMigrationBackground:{isEnabled:new l(n),getFormfills:new l(n),getLinkedFormfills:new l(n),createCustomNoteType:new l(n),saveNote:new l(n)},Feature:{isEnabled:new l(n)},Policies:{logNameEnabled:new l(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),logUserNameEnabled:new l(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),logUrlEnabled:new l(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),getSaveSiteToPersonal:new l(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),showSecureNotes:new l(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0})}}}(Interfaces),function(e){var n=Interfaces.TYPE_FUNCTION,t=Interfaces.TYPE_SYNC_FUNCTION,i=Interfaces.TYPE_STRING,o=(Interfaces.TYPE_NUMBER,Interfaces.TYPE_BOOLEAN),r=Interfaces.TYPE_OBJECT,a=Interfaces.Definition,l={countryfromip:new a(i,{include:["vault","contentScript"]}),g_loggedinoffline:new a(i,{include:["vault","site"]}),g_loggedinonline:new a(i,{include:"vault"}),g_badgedata:new a(r,{include:["login","extensionDropdown","vault"]}),g_flags:new a(r,{include:"preferences"}),g_hideappearancebox:new a(o,{include:"preferences"}),g_hidehelptranslate:new a(o,{include:"preferences"}),g_hidelogoffprefs:new a(o,{include:"preferences"}),g_hidenotes:new a(o,{include:"preferences"}),g_hiderecentlyusedlistsize:new a(o,{include:"preferences"}),g_hidesaedhotkey:new a(o,{include:"preferences"}),g_hidesearch:new a(o,{include:"preferences"}),g_hidevault:new a(o,{include:"preferences"}),g_hideshowvault:new a(o,{include:"preferences"}),g_is_linux:new a(o,{include:"preferences"}),g_is_win:new a(o,{include:["vault","preferences"]}),g_is_mac:new a(o,{include:"preferences"}),g_issafari:new a(o,{include:"preferences"}),g_langs:new a(r,{include:"preferences"}),g_nofolder_feature_enabled:new a(r,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"]}),g_basicauth_feature_enabled:new a(r,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialog","contentScriptDialogBunk2"]}),g_manual_login:new a(o,{include:"login",write:!0}),g_master_password_saved:new a(o,{include:"preferences"}),g_nopoll:new a(o,{include:"preferences"}),g_notification_data:new a(r,{include:["login","extensionDropdown","vault"]}),g_notification_type:new a(r,{include:["login","extensionDropdown"]}),g_offer_popupfill:new a(o,{include:"preferences"}),g_shownewloginoption:new a(o,{include:"preferences"}),lp_phpsessid:new a(i),lppassusernamehash:new a(o,{include:"preferences"}),remembersignons:new a(o,{include:"login"}),g_userprefs:new a(r,{sync:!0}),g_gblprefs:new a(r,{sync:!0}),clearRecentTime:new a(o,{include:"extensionDropdown",sourceFunction:"getClearRecentTime"}),g_sites_tld:new a(o,{include:"extensionDropdown",sourceFunction:function(){return getmatchingsites(!1,!0,!1)}}),g_can_clear_clipboard:new a(o,{sourceFunction:"can_clear_clipboard"}),g_can_copy_to_clipboard:new a(o,{sourceFunction:"can_copy_to_clipboard"}),g_is_chrome_portable:new a(o),g_user_debug_enabled:new a(o,{sourceFunction:"is_user_debug_enabled"}),g_have_nplastpass:new a(o,{sourceFunction:"have_nplastpass"}),g_have_native_messaging:new a(o,{sourceFunction:"have_native_messaging"}),g_have_ws:new a(o,{sourceFunction:"have_ws"}),g_one_minute_inbox_importer_dialog_enabled:new a(o,{include:["vault"]}),lp_iscbc:new a(o),extensionBaseURL:new a(i,{include:"contentScript",sourceFunction:function(){return getchromeurl("",!0)}}),create_account_safe:new a(n),copytoclipboard:new a(n),clear_badge:new a(t,{sendIndirect:!0}),clear_badge_text:new a(n),clearCache:new a(n),clearforms:new a(n),clearrecent:new a(n),createContextMenus:new a(n),DeleteOTP:new a(n),disableallalerts:new a(n),disablepasswordmanager:new a(n),disablesitealert:new a(n),formfillexport:new a(n),get_saved_logins:new a(n),delete_saved_login:new a(n),generateSharingKeys:new a(n),get_selected_tab:new a(n),get_selected_tab_data_no_extension:new a(n),loggedOut:new a(n),LP_do_login:new a(n),lpevent:new a(n),LPData:{getData:new a(n),setValue:new a(n)},LPPlatform:{getFavicon:new a(n),openTabDialog:new a(n),openSame:new a(n),navigateTab:new a(n),openPopoverDialog:new a(n),isMac:new a(t),isWin:new a(t)},openabout:new a(n),opendebugtab:new a(n),openentconsole:new a(n),openFamilyConsole:new a(n),openexport:new a(n),openfavorites:new a(n),openhelp:new a(n),openimport:new a(n),openimportchrome:new a(n),openlastpassexport:new a(n),openmyaccount:new a(n),openprefs:new a(n),openprint:new a(n),openseccheck:new a(n),opensessions:new a(n),openURL:new a(n),openvault:new a(n),saveall:new a(n),start_trial:new a(n),unprotect_data:new a(n),wlanexport:new a(n),lpWriteAllPrefs:new a(n),saveSiteFromSubmit:new a(n),get_selected_tab_data:new a(n),fillGeneratedPassword:new a(n),saveAllSite:new a(n),repromptSuccess:new a(n),open_login:new a(n),fillaid:new a(n),fillform:new a(n),fillitem:new a(n),setup_hotkeys:new a(n),IntroTutorial:{getState:new a(n),setState:new a(n),setTemporaryDisable:new a(n),getTemporaryDisable:new a(n),completeTutorial:new a(n)},OmsNotificationPopup:{getState:new a(n),setState:new a(n),startOms:new a(n),cancelNotification:new a(n),postponeNotification:new a(n)},sendLpImprove:new a(n),handleNeverURL:new a(n),can_clear_clipboard:new a(t),fix_username:new a(t),get_lplanguage:new a(t),getClearRecentTime:new a(t,{include:"extensionDropdown"}),getmatchingsites:new a(t),gettaburl:new a(t),gs:new a(t),have_binary:new a(t),include_language:new a(t),is_chrome_portable:new a(t),is_opera_chromium:new a(t),is_firefox_webext:new a(t),is_user_debug_enabled:new a(t),setcurrenttabid:new a(t,{sendIndirect:!0}),setcurrenturl:new a(t,{sendIndirect:!0}),get_method_async:new a(n),updateFieldsFromSubmit:new a(n,{include:"contentScriptSiteDialog"}),LPIcons:{get:new a(n)},LPTabState:{getSiteNotification:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),processTextSubmit:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),processPasswordSubmit:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),clear:new a(n,{include:["contentScript","contentScriptSite"],appendAdditionalArguments:!0}),getState:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),setCopiedGeneratedPassword:new a(n,{include:["generatePassword","infieldPopup"]}),getCopiedGeneratedPassword:new a(n,{include:"contentScript"})},SiteLaunchObserver:{startFillTracking:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),isFeatureEnabled:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),formSubmitted:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),initiateFormExists:new a(n,{include:"contentScript",appendAdditionalArguments:!0}),hasFormWithPassword:new a(n,{include:"contentScript",appendAdditionalArguments:!0})},showModalOverlay:new a(n),removeModalOverlay:new a(n),hideYoureAlmostDoneMarketingOverlay:new a(n),InfieldCommands:{getPopupFillData:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),setActiveFormData:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),copyPassword:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),copyUserName:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),copyUrl:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),copyProp:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),getGeneratePasswordPrefs:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),setGeneratePasswordPrefs:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),searchVault:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),searchVaultAll:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),fillUserData:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),fillGeneratedPassword:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),editFormFill:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),fillForm:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),editSite:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0}),canCopy:new a(n,{include:["infieldPopup"],appendAdditionalArguments:!0})},basicAuth:{isBasicAuth:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),setAuthCredential:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),removeAuth:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),cancelBasicAuth:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),hasFeature:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),closeNotification:new a(n,{include:["contentScript"],appendAdditionalArguments:!0}),isNotificationClosed:new a(n,{include:["contentScript"],appendAdditionalArguments:!0})},autoChangePassword:new a(n),LPFeatures:{getSaveSiteToPersonal:new a(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"]})},Policies:{logNameEnabled:new a(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),logUserNameEnabled:new a(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),logUrlEnabled:new a(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0}),getSaveSiteToPersonal:new a(n,{include:["vault","preferences","extensionDropdown","contentScript","siteDialog","site","note","formFill","contentScriptSiteDialog","contentScriptSite","contentScriptDialogBunk2"],appendAdditionalArguments:!0})},GetReliable:{trackEvent:new a(n,{include:["contentScript"]})}};Interfaces.extend(e,l)}(Interfaces.BackgroundInterface);