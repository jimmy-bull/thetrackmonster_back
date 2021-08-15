<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\DB;
use App\Models\create_beats_table;
use App\Models\tags;
use App\Models\login_signup;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Mail\Register;
use App\Mail\NewPassword;
use Illuminate\Support\Facades\Mail;
use App\Models\LoginSession;
use App\Models\favoris;
use App\Models\comment;
use File;
use Illuminate\Support\Facades\Storage;

class beatsApiController extends Controller
{
    public function register(Request $request)
    {
        if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            $verify_if_email_exist =  login_signup::where('email', "=", $request->email)->count();
            if ($verify_if_email_exist > 0) {
                return 'This email already exists.';
            } else if ($verify_if_email_exist == 0) {
                //$hashed_random_password = Hash::make(Str::random(8));  //Hash::make(Str::random(8));
                $pass_without_hash = Str::random(8);
                $accounts = new  login_signup;
                $accounts->email =  $request->email;
                $accounts->password = Hash::make($pass_without_hash);
                $accounts->save();
                $user_password = ["new_user_generated_password" => $pass_without_hash];
                Mail::to($request->email)->send(new Register($user_password));
                return 'successfully connected.';
            }
        } else {
            return 'Enter a valid email.';
        }
    }
    public function login(Request $request)
    {
        if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            $verify_if_email_exist_and_pass_correct =  login_signup::where('email', "=", $request->email)->count();
            if ($verify_if_email_exist_and_pass_correct > 0) {
                $hashedPassword =  login_signup::where('email', "=", $request->email)->value("password");
                if (Hash::check($request->password, $hashedPassword)) {
                    $token_simple = Str::random(60);
                    $session_token = Hash::make($token_simple);
                    $LoginSession_verify =  LoginSession::where('email', "=", $request->email)->count();
                    if ($LoginSession_verify > 0) {
                        LoginSession::where('email', '=', $request->email)->delete();
                        $LoginSession = new LoginSession();
                        $LoginSession->email = $request->email;
                        $LoginSession->token = $session_token;
                        $LoginSession->save();
                        return  $session_token;
                    } else {
                        $LoginSession = new LoginSession();
                        $LoginSession->email = $request->email;
                        $LoginSession->token = $session_token;
                        $LoginSession->save();
                        return  $session_token;
                    }
                } else {
                    return 'Cannot login, check your password or email.';
                }
            } else {
                return 'Cannot login, check your password or email.';
            }
        } else {
            return 'Enter a valid email.';
        }
    }
    public function new_password(Request $request)
    {
        if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            $verify_if_email_exist =  login_signup::where('email', "=", $request->email)->count();
            if ($verify_if_email_exist > 0) {
                $pass_without_hash = Str::random(8);
                login_signup::where('email', "=", $request->email)->update(['password' => Hash::make($pass_without_hash)]);
                $user_password = ["new_password" => $pass_without_hash];
                Mail::to($request->email)->send(new NewPassword($user_password));
                return "new password sent";
            } else {
                return 'No account matches with this email.';
            }
        } else {
            return 'Enter a valid email.';
        }
    }
    public function check_session_token(Request $request)
    {
        $verify_token_correct =  LoginSession::where('token', "=", $request->token)->count();
        if ($verify_token_correct > 0) {
            return 'Already connected';
        }
    }
    public function check_session_token_2($request)
    {
        $verify_token_correct =  LoginSession::where('token', "=", $request)->count();
        if ($verify_token_correct > 0) {
            return 'Already connected';
        }
    }
    public function favoris(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            $verify_if_favoris_exist =  favoris::where('foreign_id', "=", $request->foreign_id)->where('email', "=",  LoginSession::where('token', "=", $request->token)->value('email'))->count();
            if ($verify_if_favoris_exist == 0) {
                $favoris = new favoris();
                $favoris->email =  LoginSession::where('token', "=", $request->token)->value('email');
                $favoris->foreign_id =  $request->foreign_id;
                $favoris->save();
                $user_email = LoginSession::where('token', "=", $request->token)->value('email');
                $count_current_user_favoris =  favoris::where('email', "=", $user_email)->count();
                $response =  (object)[];
                $response->message =  'Beat successfully added !';
                $response->user_favoris_count =  $count_current_user_favoris;
                return json_encode($response);
            } else {
                return "Beat already in wishlist";
            }
        } else {
            return "Not connected";
        }
    }
    public function get_favoris(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            $get_mail = LoginSession::where('token', "=", $request->token)->value('email');
            $count_current_user_favoris =  favoris::where('email', "=", $get_mail)->count();
            return $count_current_user_favoris;
        } else {
            return 'Not connected';
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return create_beats_table::orderBy('id', "DESC")->skip(0)->take(1)->get();
    }
    public function all_beats()
    {
        return create_beats_table::orderBy('id', "ASC")->get();
    }
    public function beat_desc($id)
    {
        return create_beats_table::where('id', "=", $id)->get();
    }

    public function tags($id)
    {
        return tags::where('foreign_id', '=', $id)->skip(0)->take(3)->get();
    }
    public function Alltags()
    {
        return tags::all();
    }
    public function moods()
    {
        return create_beats_table::select('mood')->distinct()->get();
    }
    public function genre()
    {
        return create_beats_table::select('genre')->distinct()->get();
    }
    public function keys()
    {
        return create_beats_table::select('key')->distinct()->get();
    }

    public function select_depending_on_genre($genre)
    {
        return create_beats_table::where("genre", "=", $genre)->orderBy('id', "DESC")->get();
    }
    public function search_engine($engine_object)
    { //return var_dump (json_decode($engine_object, true));
        $engine_object_to_array =  json_decode($engine_object, true);
        $final_query = [];
        $array_auto = [];
        $etat1  = null;
        $etat2 = null;
        $etat3 = null;
        foreach (array_keys($engine_object_to_array) as $key => $value) {
            if ($engine_object_to_array["q"] !== 'all') {
                if ($value == "q") {
                    array_push($array_auto, "tags.tags LIKE " . "'" . "%" . str_replace("+", " ", $engine_object_to_array[$value]) . "%" . "'");
                }
                if ($value != "q" and $value != "price" and $value != "bpm") {
                    array_push($array_auto, "`" . $value . "`" . " = " . "'" . str_replace("+", " ", $engine_object_to_array[$value])  . "'");
                }
                if ($value == "price" || $value == "bpm") {
                    $explode_value = explode("-", $engine_object_to_array[$value]);
                    array_push($array_auto, $value . " BETWEEN " . $explode_value[0] . " AND " . $explode_value[1]);
                }
                //
                $etat1 = 'ok';
            } else  if ($engine_object_to_array["q"] == 'all') {

                if (count(array_keys($engine_object_to_array)) > 1) {
                    if ($value != "q" and $value != "price" and $value != "bpm") {
                        array_push($array_auto, "`" . $value . "`" . " = " . "'" . str_replace("+", " ", $engine_object_to_array[$value])  . "'");
                    }
                    if ($value == "price" || $value == "bpm") {
                        $explode_value = explode("-", $engine_object_to_array[$value]);
                        array_push($array_auto, $value . " BETWEEN " . $explode_value[0] . " AND " . $explode_value[1]);
                    }

                    $etat2 = 'ok';
                } else {
                    $etat3 = 'ok';
                }
            }
        }
        if ($etat1 == 'ok') {
            return create_beats_table::join('tags', "create_beats_tables.id", "=", "tags.foreign_id")->whereRaw(implode(" AND ", $array_auto))->select('create_beats_tables.*')->distinct()->get();
        }
        if ($etat2 == 'ok') {
            return  create_beats_table::whereRaw(implode(" AND ", $array_auto))->get();
        }
        if ($etat3 == 'ok') {
            return create_beats_table::all();
        }
    }
    public function favoris_show(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            $get_mail = LoginSession::where('token', "=", $request->token)->value('email');
            return create_beats_table::join('favoris', "create_beats_tables.id", "=", "favoris.foreign_id")->where("favoris.email", "=", $get_mail)->select('create_beats_tables.*')->get();
        } else {
            return 'Not connected';
        }
    }
    public function favoris_delete(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            $get_mail = LoginSession::where('token', "=", $request->token)->value('email');
            favoris::where('email', '=',  $get_mail)->where('foreign_id', '=',  $request->foreign_id)->delete();
            return create_beats_table::join('favoris', "create_beats_tables.id", "=", "favoris.foreign_id")->where("favoris.email", "=", $get_mail)->select('create_beats_tables.*')->get();
        } else {
            return 'Not connected';
        }
    }
    public function update_password(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            if (preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/", $request->password)) {
                $get_mail = LoginSession::where('token', "=", $request->token)->value('email');
                login_signup::where('email', "=",  $get_mail)->update(['password' => Hash::make($request->password)]);
                return 'Password has been changed successfully.';
            } else {
                return 'Please enter minimum eight characters, at least one letter, one number and one special character.';
            }
        } else {
            return 'Not connected.';
        }
    }
    public function get_desc_siblings(Request $request)
    {
        return create_beats_table::where('genre', "=", $request->genre)->get();
    }
    public function add_comment(Request $request)
    {
        if ($this->check_session_token_2($request->token) == "Already connected") {
            $get_mail = LoginSession::where('token', "=", $request->token)->value('email');
            $comment = new  comment;
            $comment->foreign_id = $request->foreign_id;
            $comment->user_email = $get_mail;
            $comment->comment_text = $request->comment;
            $comment->save();
            return 'Comment successfully added';
        } else {
            return 'Not connected.';
        }
    }
    public function show_comment(Request $request)
    {
        return comment::select(comment::raw('SUBSTRING(user_email, 5, 20) as user_email, comment_text,created_at,DATE_FORMAT(created_at, "%D %b %Y") as date_correct'))->where('foreign_id', "=", $request->foreign_id)->get();
    }

    /**
     * FREE DONWLOAD PART
     */

    public function free_download(Request $request)
    {
        //$pieces = explode("audio/", "http://127.0.0.1:8000/audio/6lack-type-beat-bresom-instru-rap-2021.mp3");
        //  echo  "audio/" . $pieces[1];
        // return create_beats_table::where('id', "=", $request->id)->count();
        if (create_beats_table::where('id', "=", $request->id)->value("downloadable") == True) {
            $pieces = explode("audio/", create_beats_table::where('id', "=", $request->id)->value("src"));
            return Storage::download('public/audio/'.$pieces[1]);
        } else {
            return "you are not authorized to access this link.";
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //return $id;
        return create_beats_table::where("id", "=", $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
