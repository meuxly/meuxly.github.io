i18n_lang='en';i18n_dict={"en":{"page_advertisement":"Advertisement","page_back_button":"Back","page_button_label_leave":"Leave","page_changelog":"Changelog","page_connect_help":"If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.","page_connecting":"Connecting","page_continue":"Continue","page_create_party":"Create","page_create_party_instructions":"Share this link with your friends!","page_creating_party":"Creating party...","page_fb_matchresults_description":"Can you do better? Come and play!","page_fb_matchresults_subtitle":"I survived %@m %@s and got a score of %@","page_fb_matchresults_title":"Got a new score in Agar.io","page_g_plus_share_stats":"I survived %@m %@s and got a score of %@ in Agar.io! Can you do better? Come and play!","page_gamemode_experimental":"Experimental","page_gamemode_ffa":"FFA","page_gamemode_rush":"Rush","page_gamemode_teams":"Teams","page_games_played":"Games played","page_graphics_auto":"Graphics: Auto","page_graphics_high":"Graphics: High","page_graphics_low":"Graphics: Low","page_graphics_medium":"Graphics: Medium","page_graphics_retina":"Graphics: Retina","page_graphics_title":"-- Graphics Quality --","page_graphics_very_low":"Graphics: Very Low","page_highest_mass":"Highest mass","page_instructions_mouse":"Move your mouse to control your cell","page_instructions_space":"Press <b>Space</b> to split","page_instructions_w":"Press <b>W</b> to eject some mass","page_join_party":"Join","page_join_party_code":"Enter the code your friends sent!","page_join_party_confirmation":"You are about to enter party mode.\n\nDo you want to join a party?","page_join_party_instructions":"Share the link with more friends!","page_joined_party_instructions":"You have joined this party, share the link with more friends!","page_joining_party":"Joining party...","page_last_match_results":"Last match results","page_leaderboard":"Leaderboard","page_leaderboard_time":"Leaderboard Time","page_leave_party_tooltip":"Leave Party","page_login_and_play":"Login and play","page_login_tooltip":"Login to get your benefits!","page_logout":"Logout","page_longest_survival":"Longest survival","page_main_menu_skins":"Skins","page_mass_eaten":"Mass Eaten","page_menu_login_facebook":"Sign in with Facebook","page_menu_login_google":"Sign in with Google","page_menu_main_dailyquests":"Daily Quests","page_menu_main_free_coins":"Free Coins","page_menu_main_gifts":"Gifts","page_menu_main_potions":"Potions","page_menu_shop_cancel":"Cancel","page_online_status_setting_tooltip":"Display Facebook profile picture","page_option_dark_theme":"Dark theme","page_option_no_colors":"No colors","page_option_no_names":"No names","page_option_no_skins":"No skins","page_option_show_mass":"Show mass","page_option_show_online_status":"Show Online Status","page_option_show_quest":"Show Quest","page_option_skip_stats":"Skip stats","page_party":"Party Mode","page_party_description":"Play with your friends in the same arena","page_party_is_full_message":"The party you are trying to join is full","page_party_join_error":"There was a problem joining that party, please make sure the code is correct, or try creating another party","page_party_leave_ffa":"You are in <b>%mode%</b> mode.<br><br>Do you want to continue or create a party?","page_party_leave_party":"Are you sure you want to leave the party?","page_play":"Play","page_play_as_guest":"Play as guest","page_player_cells_eaten":"Player Cells Eaten","page_position_1":"First","page_position_10":"Tenth","page_position_2":"Second","page_position_3":"Third","page_position_4":"Fourth","page_position_5":"Fifth","page_position_6":"Sixth","page_position_7":"Seventh","page_position_8":"Eighth","page_position_9":"Ninth","page_privacy_policy":"Privacy Policy","page_region_australia":"Australia","page_region_china":"China","page_region_east_asia":"East Asia","page_region_europe":"Europe","page_region_north_america":"North America","page_region_oceania":"Oceania","page_region_players":"players","page_region_poland":"Poland","page_region_russia":"Russia","page_region_select":" -- Select a Region -- ","page_region_south_america":"South America","page_region_turkey":"Turkey","page_region_us_east":"US East","page_region_us_west":"US West","page_results_party_share_link":"Share the link with your friends!<br>Press Play to enter party!","page_rush_details_message":"You have %i minutes.\\\\nGet as big as you can!","page_rush_details_placedesc_a":"1st Place","page_rush_details_placedesc_d":"Finish","page_rush_mode_unlock_fee":"Fee: %rush_fee%","page_rush_unavail_footer":"Unlock at Level %i","page_score":"Score","page_share":"Share","page_shop":"Shop","page_spectate":"Spectate","page_stats":"Stats","page_stats_cells_eaten":"cells eaten","page_stats_food_eaten":"food eaten","page_stats_highest_mass":"highest mass","page_stats_leaderboard_time":"leaderboard time","page_stats_time_alive":"time alive","page_stats_top_position":"top position","page_survival_time":"Survival Time","page_terms_of_service":"Terms of Service","page_top_position":"Top Position","page_total_cells_eaten":"Total cells eaten","page_total_mass_eaten":"Total mass eaten","page_tt_share_stats":"I survived %@m %@s and got a score of %@ in Agar.io! Can you do better? Come and play! http://r.agar.io","page_unnamed_cell":"An unnamed cell","page_web_disconnect_title":"Disconnected","page_web_disconnect_body":"Please check your internet connection.","menu_force_update_action_web":"Refresh now!","menu_settings_sfx":"Menu Sounds","menu_settings_arena_sfx":"Game Sounds","soft_update_title":"Time to update!","soft_update_title_web":"A new Agar.io version is available."}};i18n_lang=(window.navigator.userLanguage||window.navigator.language||'en').split('-')[0];if(!i18n_dict.hasOwnProperty(i18n_lang))i18n_lang='en';i18_list=i18n_dict[i18n_lang];function i18n(s){return window['i18_list'][s]||window['i18n_dict']['en'][s]||s;}
function parseString(tag,token,arr){var finalText=i18n(tag);for(i=0;i<arr.length;i++)
{finalText=finalText.replace(token,arr[i]);}
return finalText;}
window["parseString"]=parseString;